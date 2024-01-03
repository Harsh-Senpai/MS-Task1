/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/shelf.jpg";

const imageAltText = "desk with a lot of books and specs on the top";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Check out the Waste Management System Project 🗑️",
    description:
      "Created with a group of members. Optimizing waste management with a comprehensive system, our project streamlines collection, recycling, and disposal for a sustainable and eco-friendly environment.",
    url: "https://waste-managemnt-system.000webhostapp.com/",
  },
  {
    title: "Early Detection Of ADHD in Childrens Using Machine Learning 🦠",
    description:
      "ADHD diagnosis in children through machine learning, our project identifies early signs, aiding prompt intervention for better developmental outcomes.",
    url: "https://drive.google.com/drive/folders/1gsdrAxb4oHRsW2T9n7xFFmUt0NCvPZ0r?usp=sharing",
  },
  {
    title: "My Resume at a Glance 📃",
    description:
      "Created from Microsoft's Office and uploaded to Gdrive. It Includes my experience and Skills.",
    url: "https://drive.google.com/drive/folders/1-c6OeMPba6uN_iDE8qp3zhMUZm12r4-P?usp=sharing",
  },
  {
    title: "Visual Stories Unveiled 📷",
    description:
      "Mastering nature's canvas with keen observation and technical finesse, my photography captures the beauty, serenity, and intricacies of the natural world.",
    url: "https://drive.google.com/drive/folders/1RBDgKAnkBn9mWDI35mfCr213ghHj6ix3?usp=sharing",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
