---
# Copy this file for a template that can then be placed in src/content/visualizations. The name of this file will be used as the URL for the post.

# String: full title of post.
title: "Lagrangian Particle Tracking in a High-Resolution Numerical Simulation of Deep Convection over the Ocean"

# String (optional): shortened version of title for display on home page in card.
shortenedTitle: "Lagrangian Particles Over Ocean"

# String (optional, by default "VAST Staff"). Author of this post.
author: ""

# String in the form "December 10, 2019".
datePosted: "Feb 25, 2026" 

# String representing a valid path to an image. Used in the card on the main page. Likely to be in the form "/src/assets/..." for images located in src/assets.
coverImage: "/src/assets/lagrangian-particles-over-ocean.png"

# The three following tag arrays are each an array of strings. Each string (case insensitive) represents a filter from the front page. Tags that do not correspond to a current filter will be ignored for filtering.

# options: atmosphere, climate, weather, oceans, sun-earth interactions, fire dynamics, solid earth, recent publications, experimental technologies
topicTags: ["climate", "weather"]

# options: CAM, CESM, CM1, CMAQ, CT-ROMS, DIABLO Large Eddy 
Simulation, HRRR, HWRF, MPAS, SIMA, WACCM, WRF
modelTags: ["SAM"]

# options: Blender, Maya, NCAR Command Language, ParaView, Visual Comparator, VAPOR
softwareTags: ["Blender"]

# Case insensitive string describing the main media type ("Video", "Image", "App", etc). This is displayed in the post heading as a small tag above the title.
mediaType: "Video"

# The following headings and subheadings are provided examples - unused ones can be deleted. All Markdown content below will be rendered in the frontend.
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/yeGDYEKo_Ic?si=wv1PR9X8IeNilHqj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

___


#### About the Science

This animation features Lagrangian particle tracking in a simulated deep convection over ocean surface using SAM (System for Atmospheric Modeling). The simulation domain is 128 x 128 km with 500-m horizontal spacing on a doubly periodic domain and stretched vertical grid with spacing ranging from 80 m near the surface to 1 km in the stratosphere. Hundreds of millions of Lagrangian particles are released in the entire domain to track air motion. QN represents non-precipitating water content, and QP represents precipitating snow and rain content.

Volumes: QN - Non-Precipitating Water Content (g/kg)
Particles: QP - Precipitating Snow and Rain Content (g/kg)
Surface: MSE - Moist Static Energy (K)

<br>

Funding Acknowledgement: This material is supported by NSF NCAR, which is a major facility sponsored by the National Science Foundation under Cooperative Agreement No. 1852977.

<br>

Reference: Tian, Y, Z. Kuang. 2019. Why Does Deep Convection Have Different Sensitivities to Temperature Perturbations in the Lower versus Upper Troposphere? Journal of the Atmospheric Sciences. DOI: 10.1175/JAS-D-18-0023.1


<br>

##### Computational Modeling

Yang Tian (NCAR/CGD)


##### Visualization & Post-Production

Matt Rehme (NCAR/CISL)



##### Visualization Software

Python, Blender

