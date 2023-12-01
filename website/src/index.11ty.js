
const data = {
    title: "People DB home",
    tags: [ 'allPages' ],
    eleventyComputed: {
        // ---
        // injection hack to get correct page date property!
        // https://github.com/11ty/eleventy/issues/2199#issuecomment-1027362151
        date: (data) => {
            data.page.date = new Date(
                data.zoodb.zoo_gitlastmodified_processor.get_latest_modification_date()
            );
            return data.page.date;
        }
        // ---
    }
};

const render = async function (data)
{
    const eleventy = this;
    const zoodb = data.zoodb;

    const { render_html_standalone } = await import('@phfaist/zoodb/zooflm');

    let content = `


    <script type="text/javascript" src="~/website/javascripts/setupSearch.js" async></script>


    <style>
    #SearchWidget {
      margin: 20px 0;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 5px;
      background-color: #f9f9f9;
    }
    #SearchWidget span {
      font-style: normal;
      color: #555;
    }
    /* Add more styles as needed */
  </style>

<p class="abt">
This is the Quantum Channel Zoo, a website collecting useful mathematical and information-theoretic facts about various quantum channels.
The Quantum Channel Zoo was founded in an <a href="https://math.illinois.edu/research/illinois-geometry-lab" target="_blank">IGL</a> undergraduate research project conducted in the 2023 Fall term at the University of Illinois Urbana-Champaign, and is built using <a href="https://github.com/phfaist/zoodb" target="_blank">ZooDb</a>.
</p>

<p class="abt">
Browse the list of channels below, or use the <a href="/search">search function</a>. Make sure to visit the <a href="/about">About page</a> to find information about the mathematical conventions used on this website, and how to contribute!
</p>

<h2>List of channels</h2>`;

    content += `
<ul>`;

    const person_id_list = [ ...Object.keys(zoodb.objects.person) ];
    person_id_list.sort();

    for (const person_id of person_id_list) {
        // If we'd like to render other properties of `person`, especial FLM
        // content that is not marked as standalone-mode compatible, we should
        // use `zooflm.make_and_render_document` with a render callback.

        const person = zoodb.objects.person[person_id];
        const personHrefUrl = eleventy.hrefUrl(
            zoodb.zoo_object_permalink('channel', person_id)
        );
        const personName = render_html_standalone(zoodb.objects.person[person_id].name);

        content += `
<li><a href="${ personHrefUrl }">${ personName }</a></li>
`;
    }

    content += `
</ul>

<!-- Search Widget 
<div
  id="SearchWidget"
  data-search-index-url="/dat/searchindex.json"
>
  <span style="font-style: italic">loading …</span>
</div> -->

`;
    return content;
};


module.exports = { data, render, };
