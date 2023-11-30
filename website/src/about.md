---
title: "About People DB"
tags:
  - "allPages"
---

# About this website

<p class="abt">
This is the Quantum Channel Zoo, a website collecting useful mathematical and information-theoretic facts about various quantum channels.
It was created in an <a href="https://math.illinois.edu/research/illinois-geometry-lab" target="_blank">IGL</a> undergraduate research project conducted in the 2023 Fall term at the University of Illinois Urbana-Champaign.
The IGL team consisted of undergraduate students <a href="mailto:bbook3@illinois.edu">Ben Booker</a>, <a href="mailto:tgao13@illinois.edu">Tianshun Gao</a>, <a href="mailto:xque2@illinois.edu">Anne Que</a>, <a href="mailto:yuxuanw8@illinois.edu">Yuxuan Wan</a> and <a href="mailto:jiabaox3@illinois.edu">Lumi Xu</a>, graduate student
<a href="mailto:sgb4@illinois.edu">Sujeet Bhalerao</a> and faculty advisor <a href="mailto:leditzky@illinois.edu">Felix Leditzky</a>.
The website is created using the <a href="https://github.com/phfaist/zoodb" target="_blank">ZooDb</a>.
</p>

# How to contribute

<p class="abt">
The zookeepers need your help keeping this database uptodate! For more information, please consult the `README.md` file in our <a href="#" target="_blank">Github repository</a>.
</p>

# How to use this website

<p class="abt">
The <a href="/">Homepage</a> currently lists all channels in the database. Each channel webpage has a short description of the channel, the channel dimensions, and different channel representations (if available), including Kraus representation, isometry, and Choi state.
We will soon add mathematical and information-theoretic properties, such as whether a channel is entanglement-breaking, or what we know about its quantum capacity.
</p>

## Mathematical conventions

<p class="abt">
We use the following mathematical conventions on this website (see <a href="https://arxiv.org/abs/1106.1445" target="_blank">Mark Wilde's textbook</a> for explanations of the notation used).
A channel <span class="inline-math">\( \mathcal{N}\colon A\to B \)</span> maps operators on an input Hilbert space <span class="inline-math">\( \mathcal{H}_A \)</span> to operators on an output Hilbert space <span class="inline-math">\( \mathcal{H}_B \)</span>.
Then there exists an environment space <span class="inline-math">\( \mathcal{H}_E \)</span> of dimension <span class="inline-math">\( d_E = \dim\mathcal{H}_E \)</span> such that the channel action can be written as follows:
<span class="inline-math">\[ \mathcal{N}(X) = \sum_{i=1}^{d_E} K_i X K_i^\dagger = \operatorname{tr}_E VXV^\dagger.\]</span>
In the above, the <strong>Kraus operators</strong> <span class="inline-math">\( K_i\colon \mathcal{H}_A \to \mathcal{H}_B\)</span> satisfy <span class="inline-math">\( \sum_{i=1}^{d_E} K_i^\dagger K_i = I_A,\)</span> where <span class="inline-math">\( I_A\)</span> denotes the identity operator on <span class="inline-math">\( \mathcal{H}_A\)</span>.
The <strong>channel isometry</strong> <span class="inline-math">\( V\colon \mathcal{H}_A \to \mathcal{H}_B \otimes \mathcal{H}_E\)</span> satisfies <span class="inline-math">\( V^\dagger V = I_A\)</span>.
The Choi operator <span class="inline-math">\( \tau_{AB} \)</span> of <span class="inline-math">\( \mathcal{N}\colon A\to B \)</span> is defined as <span class="inline-math">\[ \tau_{AB} = (\operatorname{id}_A\otimes \mathcal{N})(|\gamma\rangle\langle\gamma|_{AB}),\]</span>
where <span class="inline-math">\( |\gamma\rangle = (\dim\mathcal{H}_A)^{-1/2} \sum_{i=1}^{\dim\mathcal{H}_A} |i\rangle_A\otimes |i\rangle_A\)</span> is an unnormalized maximally entangled state defined in terms of an orthonormal basis <span class="inline-math">\( \lbrace |i\rangle\rbrace_{i=1}^{\dim\mathcal{H}_A} \)</span> of <span class="inline-math">\( \mathcal{H}_A \)</span>. The Choi operator of a quantum channel is a positive semidefinite operator satisfying <span class="inline-math">\( \tau_A = \operatorname{tr}_B\tau_{AB} = I_A\)</span>.
</p>