---
# Copy this file for a template that can then be placed in src/content/visualizations. The name of this file will be used as the URL for the post.

# String: full title of post.
title: "Tropical Cyclones in High-Resolution Simulations of Past and Future Climates"

# String (optional): shortened version of title for display on home page in card.
shortenedTitle: "Paleoclimate"

# String (optional, by default "VAST Staff"). Author of this post.
author: ""

# String in the form "December 10, 2019".
datePosted: "January 10, 2025" 

# String representing a valid path to an image. Used in the card on the main page. Likely to be in the form "/src/assets/..." for images located in src/assets.
coverImage: "/src/assets/paleoclimate.png"

# The three following tag arrays are each an array of strings. Each string (case insensitive) represents a filter from the front page. Tags that do not correspond to a current filter will be ignored for filtering.

# options: atmosphere, climate, weather, oceans, sun-earth interactions, fire dynamics, solid earth, recent publications, experimental technologies
topicTags: ["climate", "weather"]

# options: CAM, CESM, CM1, CMAQ, CT-ROMS, DIABLO Large Eddy Simulation, HRRR, HWRF, MPAS, SIMA, WACCM, WRF
modelTags: ["CESM"]

# options: Blender, Maya, NCAR Command Language, ParaView, Visual Comparator, VAPOR
softwareTags: ["Blender"]

# Case insensitive string describing the main media type ("Video", "Image", "App", etc). This is displayed in the post heading as a small tag above the title.
mediaType: "Video"

# The following headings and subheadings are provided examples - unused ones can be deleted. All Markdown content below will be rendered in the frontend.
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/I7lfdKOIIaY?si=DphCwOI2GyyfVCbA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Extreme Weather Events Under a Wide Range of Climates in High-Resolution Coupled CESM
___

#### About the Science

The paleoclimate Community Earth System Model simulations shown in this video were completed as part of the Accelerated Scientific Discovery (ASD) program, which provided a unique opportunity for large-scale computational projects to have nearly exclusive use of the new NSF NCAR high-performance computing system Derecho for a few months.

<br>

Project description:

We propose an unprecedented, landmark set of fully coupled high-resolution (HR) climate simulations for past greenhouse and icehouse climates to study the dynamics that govern the characteristics of extreme weather events in both atmosphere and ocean under altered climate states. We target well-studied paleoclimate intervals with higher and lower atmospheric CO2, including the Last Glacial Maximum, the Pliocene, and the Early Eocene. We employ scientifically validated and extensively tested CESM code and configuration, the iHESP high-resolution CESM1.3 (~0.25° atmosphere/land and ~0.1° ocean/sea ice) with water isotopes. The unique water isotope capability enables unprecedented integration of information from model and paleoclimate observational data.

<br>

References

Temperatures derived from benthic foraminifera:
Westerhold et al. (2020), An astronomically dated record of Earth’s climate and its predictability over the last 66 million years. Science. DOI:10.1126/science.aba6853

HadCRUT4 historical temperatures:
Morice, et al. (2012), Quantifying uncertainties in global and regional temperature change using an ensemble of observational estimates: The HadCRUT4 dataset, Journal of Geophysical Research, DOI:10.1029/2011JD017187

High-resolution CESM1.3 RCP8.5 simulation:
Chang, et al. (2020). An unprecedented set of high-resolution earth system simulations for understanding multiscale interactions in climate variability and change. Journal of Advances in Modeling Earth Systems. DOI:10.1029/2020MS002298



##### Computational Modeling

<br>

Project Leads:

Bette Otto-Bliesner (NSF NCAR CGD)

Jessica Tierney (University of Arizona)


<br>

Project Contributors:

Jiang Zhu: Model development and testing; preindustrial and Eocene simulations; post-processing; visualization design

Ran Feng: Pliocene simulation; post-processing

Clay Tabor: Last Glacial Maximum simulation; post-processing

Jesse Nusbaumer: Model development

Jim Edwards: Model porting and engineering support

Esther Brady: Simulation setup; visualization design

Sophia Macarewich: Data management; visualization design




##### Computational Resources

Cheyenne, NWSC


##### Model

[Community Earth System Model](https://github.com/ESCOMP/CESM)

___

#### About the Visualization

##### Visualization and Post-production

Matt Rehme (NSF NCAR CISL)

Special thanks to: Nihanth Cherukuru and Tammy Zhang

##### Visualization Software

Blender
