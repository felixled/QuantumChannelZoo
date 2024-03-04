# About
This is the Quantum Channel Zoo, a website collecting useful mathematical and information-theoretic facts about various quantum channels.
It was created in an <a href="https://math.illinois.edu/research/illinois-geometry-lab" target="_blank">IGL</a> undergraduate research project conducted in the 2023 Fall term at the University of Illinois Urbana-Champaign.
The IGL team consisted of undergraduate students <a href="mailto:bbook3@illinois.edu">Ben Booker</a>, <a href="mailto:tgao13@illinois.edu">Tianshun Gao</a>, <a href="mailto:xque2@illinois.edu">Anne Que</a>, <a href="mailto:yuxuanw8@illinois.edu">Yuxuan Wan</a> and <a href="mailto:jiabaox3@illinois.edu">Lumi Xu</a>, graduate student
<a href="mailto:sgb4@illinois.edu">Sujeet Bhalerao</a> and faculty advisor <a href="mailto:leditzky@illinois.edu">Felix Leditzky</a>.
The website is created using <a href="https://github.com/phfaist/zoodb" target="_blank">ZooDb</a>.
</p>

# How to contribute

<p class="abt">
The zookeepers need your help keeping this database up-to-date! For more information, please consult the `README.md` file in our <a href="#" target="_blank">Github repository</a>.
</p>

# How to use this website

<p class="abt">
The <a href="https://quantumchannelzoo.org/">Homepage</a> currently lists all channels in the database. Each channel webpage has a short description of the channel, the channel dimensions, and different channel representations (if available), including Kraus representation, isometry, and Choi state.
We will soon add mathematical and information-theoretic properties, such as whether a channel is entanglement-breaking, or what we know about its quantum capacity.
</p>

## Mathematical conventions

<p class="abt">
We use the following mathematical conventions on this website (see <a href="https://arxiv.org/abs/1106.1445" target="_blank">Mark Wilde's textbook</a> for explanations of the notation used).
A channel $\mathcal{N}\colon A\to B$ maps operators on an input Hilbert space $\mathcal{H}_A$ to operators on an output Hilbert space $\mathcal{H}_B$.
Then there exists an environment space $\mathcal{H}_E$ of dimension $d_E = \dim\mathcal{H}_E$ such that the channel action can be written as follows:
$$\mathcal{N}(X_A) = \sum_{i=0}^{d_E-1} K_i X_A K_i^\dagger = \text{tr}_E VX_AV^\dagger = \text{tr}_A\left[\tau_{AB} \left(X_A^T\otimes \mathbf{1}_B\right)\right].$$
In the above, we have used the following objects:
<ul>
<li>the <strong>Kraus operators</strong> $K_i\colon \mathcal{H}_A \to \mathcal{H}_B$ satisfy $$\sum_{i=0}^{d_E-1} K_i^\dagger K_i = \mathbf{1}_A,$$ where $\mathbf{1}_A$ denotes the identity operator on $\mathcal{H}_A$.
</li>
<li>
The <strong>channel isometry</strong> $V\colon \mathcal{H}_A \to \mathcal{H}_B \otimes \mathcal{H}_E$ satisfies $V^\dagger V = \mathbf{1}_A$.
</li>
<li>
The <strong>Choi operator</strong> $\tau_{AB}$ of $\mathcal{N}\colon A\to B$ is defined as $$\tau_{AB} = (\text{id}_A\otimes \mathcal{N})(|\gamma\rangle\langle\gamma|_{AA'}),$$
where $$|\gamma\rangle_{AA'} = \sum_{i=0}^{|A|-1} |i\rangle_A\otimes |i\rangle_{A'}$$ is an unnormalized maximally entangled state on  $AA'$ defined in terms of an orthonormal basis $\lbrace |i\rangle_A\rbrace_{i=0}^{|A|-1}$ of $\mathcal{H}_A $.
Here, we used the notation $|A| = \dim\mathcal{H}_A$.
The Choi operator of a quantum channel is a positive semidefinite operator satisfying $\tau_A = \text{tr}_B\tau_{AB} = \mathbf{1}_A$.
</li>
</ul>
For information on how to derive these three channel representations and how to switch between them, we refer to <a href="https://arxiv.org/abs/1106.1445" target="_blank">Mark Wilde's textbook</a> or <a href="https://www.overleaf.com/read/hzjdctrykwhx" target="_blank">Felix Leditzky's lecture notes on quantum channels</a>.
</p>

## About ZooDB

The ZooDb database is used to store a database of people with
parent/child and friend relationships.  The source data providing the content
of the database is a collection of YAML files.
YAML is a common and useful markup language to store structured data.
You can [google "YAML tutorial"](https://google.com/search?q=YaML+tutorial)
or check out the language's [Wikipedia
page](https://en.wikipedia.org/wiki/YAML).

The database object schemas are in `schemas/`.  The schemas define what exactly
is being stored in the database.

The data, provided in YAML files, is in the folder `data/`.

Minimal JS code to load the people DB in memory is in `peopledbjs/`.  If you want
to produce any different form of output, e.g., a handbook or print form of the
database, then you can use this code to load the database in memory and use it
to generate the required output.

**To build the website:** refer to the [README](website/README.md) file
in the folder `website/` folder. The website
is powered by [11ty](https://11ty.dev/) and [parcel](https://parceljs.org/).

See also [the documentation for the ZooDB
package](https://zoodb.readthedocs.org/).