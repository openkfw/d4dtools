---
comments: true
---

# FAQ on the technology

On this page, we answer some of the most frequent questions that people have concerning the website and its features.

## Question: I heard that this website is on the GitHub. What does this mean ?

[GitHub](https://github.com/) is an online software development platform. It's used for storing, tracking, and collaborating on software projects. We use it enable a simple, transparent exchange concerning the content of this website within the wider eco-system of development cooperation.

## Question: But is GitHub not used for software projects ? This is just documentation ?

Indeed, GitHub is mainly used for the work on complex software projects, like the [Linux kernel](https://github.com/torvalds/linux). We use it for a simple and reproducable transformation of the information into a website.

## Question: So how do you create the website ?

1. We save the information as [markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) files. They have a simple syntax compared to html and contain all the necessary information to render the website. 
2. These markdown files are then translated into a website with the [mkdocs-material](https://squidfunk.github.io/mkdocs-material/) tool stack. A number of different tools exist, but this one felt like a stack, which is fairly easy to set up and provides great looking results. [Numerous alternatives](https://jamstack.org/generators/) that transform markdown into websites exist and everyone is free to choose their fitting tool.
3. The generation of the website is automatically started whenever we change the content of the markdown files or the configuration within the repo. This is done through a [github action](https://github.com/features/actions) and fully automated.

## Question: Why not just work with word and pdfs ?

Word documents are great for writing documents that are sent from one person to another, commenting etc. However, they also have a number of downsides:

- The docx format of word is tightly linked to microsoft products. Especially in contexts where licence costs are a major bottleneck, it would be great to have the information saved in a more flexible format.
- In word files the layout is strongly intertwined with the content. This makes it harder to reuse and change the information without touching the layout.
- pdf's are highly controlled final products, but features like comments, search etc are very hard to implement. 
- We expect the content of this website to continuously evolve. This is made much easier by working on a software development platform.

## Question: Are you sure that the technical complexity does not hinder further input ?

We are trying to make it as simple as possible to contribute through comments and issues. But only time will tell, if the work in markdown files is getting acceptable for a wide range of contributors in this community.

## Question: So I am allowed to simply copy and reuse the information and website ?

Reuse and sharing are strongly encouraged and one of the main goals of the effort. This is explicitly allowed by the licence of this website, which is a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License (CC BY-NC-SA 4.0)](https://creativecommons.org/licenses/by-nc-sa/4.0/). Have a look on their website, if you are unsure.

## Question: What if I would like to contribute, have important information or would like to provide an update on something?

All contributions to the project are welcome and strongly encouraged. We wrote an extensive [contributing guide](contributing.md) to guide you through the process.
 
## I have another question. Where can I ask it ?

Please write it in the comments section and we will try to solve it.
