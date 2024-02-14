const data = async () => {
  const zooflm = await import("@phfaist/zoodb/zooflm");

  return {
    pagination: {
      data: "zoodb.objects.channel",
      size: 1,
      resolve: "values",
      addAllPagesToCollections: true,
      alias: "channel",
    },
    date: "2000-01-01", // should be ignored
    tags: ["allPages", "channel"],
    eleventyComputed: {
      permalink: (data) =>
        data.zoodb.zoo_object_permalink("channel", data.channel.channel_id) +
        ".html",
      title: (data) => zooflm.render_text_standalone(data.channel.name),
      channel_name: (data) => zooflm.render_text_standalone(data.channel.name),
      date: (data) => {
        // injection hack to get correct page date property!
        // https://github.com/11ty/eleventy/issues/2199#issuecomment-1027362151
        data.page.date = new Date(data.channel._zoodb.git_last_modified_date);
        return data.page.date;
      },
    },
  };
};

const render = async (data) => {
  const { channel, zoodb } = data;

  const zoo_flm_environment = zoodb.zoo_flm_environment;

  const zooflm = await import("@phfaist/zoodb/zooflm");
  const { sqzhtml } = await import("@phfaist/zoodb/util/sqzhtml");

  const render_doc_fn = (render_context) => {
    const { ne, rdr, rdrblock, ref } = zooflm.make_render_shorthands({
      render_context,
    });

    let s = "";

    s += sqzhtml`
<article>
<div class="channel-title-wrapper">
<h1>${rdr(channel.name)}</h1>
<a class="channel-title-link" style="${channel.wiki_link ? '' : 'display: none'}"
  href="${channel.wiki_link ? rdr(channel.wiki_link) : ''}" target="_blank">
<i class="fa-solid fa-link"></i>
<span>Wiki</span>
</a>
</div>
<hr>
<h2>Description</h2>
<div style="margin: 1.5rem 0px">${rdrblock(channel.biography)}</div>
<hr>`;

if (channel.dimensions != null) {
      s += sqzhtml`
	<p><strong>Channel dimensions</strong> (input, output, minimal environment): ${rdr(channel.dimensions)}</p>
  <hr>`;
    }


    
    if (channel.kraus_operators != null || channel.isometry != null || channel.choi_state != null) {
	s += sqzhtml`
	<h2>Representations</h2>`;
    }

    // add Kraus Operators
    if (channel.kraus_operators != null) {
      s += sqzhtml`
        <h3>Kraus Operators</h3>
        <div>${rdrblock(channel.kraus_operators)}</div>`;
    }

    // add isometry
    if (channel.isometry != null) {
      s += sqzhtml`
        <h3>Isometry</h3>
        <div>${rdrblock(channel.isometry)}</div>`;
    }

    // add chio state
    if (channel.choi_state != null) {
      s += sqzhtml`
          <h3>Choi State</h3>
          <div>${rdrblock(channel.choi_state)}</div>
          <hr>`;
    }

    const relations = channel.relations ?? {};

    if (relations.spouse != null) {
      s += sqzhtml`



<h2>Spouse</h2>
<p>${ref("channel", relations.spouse)}</p>`;
    }

    if (relations.parents != null && relations.parents.length) {
      s += sqzhtml`
<h2>Parents</h2>
<ul>`;
      for (const parent_relation of relations.parents) {
        s += sqzhtml`
    <li>${ref("channel", parent_relation.channel_id)}</li>
  `;
      }
      s += sqzhtml`
</ul>
`;
    }

    if (relations.children != null && relations.children.length) {
      s += sqzhtml`
<h2>Children</h2>
<ul>`;
      for (const child_relation of relations.children) {
        s += sqzhtml`
    <li><p>${ref("channel", child_relation.channel_id)}</p></li>
  `;
      }
      s += sqzhtml`
</ul>
`;
    }

    let friends_all = [].concat(
      relations.friends ?? [],
      relations.friend_of ?? []
    );

    if (friends_all.length) {
      s += sqzhtml`
<h2>Friends</h2>
<ul>`;
      for (const friend_relation of friends_all) {
        let friend_detail_text = "";
        if (friend_relation.friend_detail) {
          friend_detail_text = `  (${rdr(friend_relation.friend_detail)})`;
        }

        s += sqzhtml`
    <li>${ref("channel", friend_relation.channel_id)}${friend_detail_text}</li>`;
      }
      s += sqzhtml`<hr>
</ul>
`;
    }

    s += sqzhtml`

<hr>
<RENDER_ENDNOTES/>

<p class="last-edit">Last modified: ${data.page.date.toString()}</p>
</article>`;

    return s;
  };

  return zooflm.make_and_render_document({
    zoo_flm_environment,
    render_doc_fn,
    //doc_metadata: {},
    render_endnotes: {
      annotations: ["sectioncontent"],
    },
  });
};

module.exports = { data, render };
