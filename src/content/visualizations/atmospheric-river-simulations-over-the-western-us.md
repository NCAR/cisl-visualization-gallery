---
# Copy this file for a template that can then be placed in src/content/visualizations. The name of this file will be used as the URL for the post.

# String: full title of post.
title: "Atmospheric River Simulations Over the Western US"

# String (optional): shortened version of title for display on home page in card.
shortenedTitle: "Atmospheric Rivers"

# String (optional, by default "VAST Staff"). Author of this post.
author: "Matt Rehme"

# String in the form "December 10, 2019".
datePosted: "February 7, 2024" 

# String representing a valid path to an image. Used in the card on the main page. Likely to be in the form "/src/assets/..." for images located in src/assets.
coverImage: "/src/assets/atmospheric-river-simulations-over-the-western-us.png"

# The three following tag arrays are each an array of strings. Each string (case insensitive) represents a filter from the front page. Tags that do not correspond to a current filter will be ignored for filtering.

# options: atmosphere, climate, weather, oceans, sun-earth interactions, fire dynamics, solid earth, recent publications, experimental technologies
topicTags: ["atmosphere", "weather"]

# options: CAM, CESM, CM1, CMAQ, CT-ROMS, DIABLO Large Eddy Simulation, HRRR, HWRF, MPAS, SIMA, WACCM, WRF
modelTags: [""]

# options: Blender, Maya, NCAR Command Language, ParaView, Visual Comparator, VAPOR
softwareTags: ["Blender"]

# Case insensitive string describing the main media type ("Video", "Image", "App", etc). This is displayed in the post heading as a small tag above the title.
mediaType: "Video"

# The following headings and subheadings are provided examples - unused ones can be deleted. All Markdown content below will be rendered in the frontend.
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/bmuJp9l4u0A?si=fW42cWluO7wuPb16" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Atmospheric River Simulations Over the Western US Using CESM with the Non-Hydrostatic MPAS Dynamical Core Across Scales

In this experiment, we use the non-hydrostatic Model for Prediction Across Scales (MPAS) dynamical core in the Community Earth System Model (CESM) to simulate atmospheric rivers (ARs) across scales in a regionally refined configuration down to 3km over the western US. The precipitation over the western US coast is largely associated with concentrated water vapor transport over the North Pacific, known as atmospheric rivers.

Here, we show the global view of large-scale moisture flux transport and the associated ARs. We further zoom into the refined domain over the western US for the ARs-driven precipitation. The visualization shows the tracks of the ARs in terms of the instantaneous integrated moisture flux transport and the accumulated landfalling precipitation over the coastal regions during the simulated winter season. The refined grids realistically capture the terrain details and the fine-scale details of the precipitation over the heavily impacted region. The high-resolution nest at 3km can resolve the AR features from the southwest to the northwest coast and the heavy precipitation events that bring major impacts from the coastal ranges to the mountainous regions.

We also look at the rain vs. snow accumulation overlaid with the water vapor transport pattern over the refined region. The model simulates significantly enhanced snowpack distributions over much better resolved complex mountainous terrains (mainly over the Cascade Range, coastal range, and Sierra Nevada). The accumulated intense rainfall over the mountainous ranges and downstream communities has a direct influence on the flooding risk, and the results show the potential for studying ARs and the hydrological impacts using this new modeling framework. Overall, we quantify and visualize the multi-scale precipitation extremes under a high-resolution integrated modeling framework using CESM-MPAS. The simulation and visualization give us a better understanding of the extreme AR events and intensifying water cycle and extremes.

___

#### More Media

#### About the Science

##### Science Credits

Acknowledgments: This work was supported by the NSF-funded project EarthWorks and NSF NCAR. Computing resources were provided by the Climate Simulation Laboratory at NSF NCAR’s Computational and Information Systems Laboratory (CISL).
Reference: Huang, X., Gettelman, A., Skamarock, B., Lauritzen P.H., et al., 2022. Advancing Precipitation Prediction Using a New Generation Storm-resolving Model Framework – SIMA-MPAS (V1.0): a Case Study over the Western United States. Geoscientific Model Development, 15(21), pp.8135-8151. https://doi.org/10.5194/gmd-15-8135-2022.

##### Computational Modeling

Xingying Huang (NCAR CGD)

___

#### About the Visualization

Video Design and Scripting: Xingying Huang (NCAR CGD), Christine Shields (NCAR CGD), Matt Rehme (NCAR CISL), Nihanth Cherukuru (NCAR CISL)

##### Visualization and Post-production

Matt Rehme (NCAR/CISL)

##### Visualization Software

Python, Blender

___

#### More Information

##### Further Information

