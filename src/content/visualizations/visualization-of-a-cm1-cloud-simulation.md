---
# Copy this file for a template that can then be placed in src/content/visualizations. The name of this file will be used as the URL for the post.

# String: full title of post.
title: "Visualization of a CM1 Cloud Simulation"

# String (optional): shortened version of title for display on home page in card.
shortenedTitle: "CM1 Clouds"

# String (optional, by default "VAST Staff"). Author of this post.
author: "Matt Rehme"

# String in the form "December 10, 2019".
datePosted: "October 21, 2024" 

# String representing a valid path to an image. Used in the card on the main page. Likely to be in the form "/src/assets/..." for images located in src/assets.
coverImage: "/src/assets/visualization-of-a-cm1-cloud-simulation.png"

# The three following tag arrays are each an array of strings. Each string (case insensitive) represents a filter from the front page. Tags that do not correspond to a current filter will be ignored for filtering.

# options: atmosphere, climate, weather, oceans, sun-earth interactions, fire dynamics, solid earth, recent publications, experimental technologies
topicTags: ["atmosphere", "weather"]

# options: CAM, CESM, CM1, CMAQ, CT-ROMS, DIABLO Large Eddy Simulation, HRRR, HWRF, MPAS, SIMA, WACCM, WRF
modelTags: ["CM1"]

# options: Blender, Maya, NCAR Command Language, ParaView, Visual Comparator, VAPOR
softwareTags: ["Blender", "OpenVDB"]

# Case insensitive string describing the main media type ("Video", "Image", "App", etc). This is displayed in the post heading as a small tag above the title.
mediaType: "Video"

# The following headings and subheadings are provided examples - unused ones can be deleted. All Markdown content below will be rendered in the frontend.
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/VkOoxfK0nik?si=25tc19aKgP23Bo0L" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

The simulation data was generated from a three-hour simulation at 7.5 m grid-spacing (domain size of 10 km x 10 km x 8 km) of a precipitating cumulus congestus cloud using Cloud Model 1 (CM1) with Lagrangian microphysics on NSF NCAR's Derecho supercomputer. Model output, in the form of NetCDF files, was converted to OpenVDB volume files, which were then read directly into Blender 3D animation software.

This visualization was featured in the SC24 Art of HPC exhibit.

___

#### More Media

#### About the Science

##### Science Credits

Hugh Morrison, Kamal Kant Chandrakar

##### Computational Modeling

___

#### About the Visualization

##### Visualization and Post-production

Matt Rehme

##### Visualization Software

Python, Blender, OpenVDB

___

#### More Information

##### Further Information

