---
# Copy this file for a template that can then be placed in src/content/visualizations. The name of this file will be used as the URL for the post.

# String: full title of post.
title: "Wind Speed Over Greenland (3D Interactive)"

# String (optional): shortened version of title for display on home page in card.
shortenedTitle: ""

# String (optional, by default "VAST Staff"). Author of this post.
author: "Matt Rehme"

# String in the form "December 10, 2019".
datePosted: "October 20, 2024" 

# String representing a valid path to an image. Used in the card on the main page. Likely to be in the form "/src/assets/..." for images located in src/assets.
coverImage: "/src/assets/wind-speed-over-greenland-interactive.png"

# The three following tag arrays are each an array of strings. Each string (case insensitive) represents a filter from the front page. Tags that do not correspond to a current filter will be ignored for filtering.

# options: atmosphere, climate, weather, oceans, sun-earth interactions, fire dynamics, solid earth, recent publications, experimental technologies
topicTags: ["experimental technologies", "weather", "atmosphere"]

# options: CAM, CESM, CM1, CMAQ, CT-ROMS, DIABLO Large Eddy Simulation, HRRR, HWRF, MPAS, SIMA, WACCM, WRF
modelTags: [""]

# options: Blender, Maya, NCAR Command Language, ParaView, Visual Comparator, VAPOR
softwareTags: ["Babylon.js"]

# Case insensitive string describing the main media type ("Video", "Image", "App", etc). This is displayed in the post heading as a small tag above the title.
mediaType: "Web Interactive"

# The following headings and subheadings are provided examples - unused ones can be deleted. All Markdown content below will be rendered in the frontend.
---

<iframe src="https://ncar.github.io/interactive3d/pages/interactive.html"></iframe>

___

#### About the Science

##### Science Credits


This 3D interactive app was created from the <a href="https://visualizations.ucar.edu/visualizations/community-earth-system-model-cesm-greenland/" alt="Link to Greenland data visualization page." target="_blank">CESM Wind Speed Over Greenland visualization</a> using the Babylon JS library. Please see that page for more information on the science.


#### About the Visualization

##### Visualization

Matt Rehme

##### Visualization Software

NCL, Blender, Babylon.js
___

#### More Information

##### Code

See the repository for this interactive [here](https://github.com/NCAR/interactive3d).



