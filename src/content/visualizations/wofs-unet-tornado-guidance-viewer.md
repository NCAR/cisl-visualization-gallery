---
# Copy this file for a template that can then be placed in src/content/visualizations. The name of this file will be used as the URL for the post.

# String: full title of post.
title: "WoFS UNet Tornado Guidance Viewer"

# String (optional): shortened version of title for display on home page in card.
shortenedTitle: ""

# String (optional, by default "VAST Staff" when left empty). Author of this post.
author: ""

# String in the form "December 10, 2019".
datePosted: "January 4, 2024" 

# String representing a valid path to an image. Used in the card on the main page. Likely to be in the form "/src/assets/..." for images located in src/assets.
coverImage: "/src/assets/wofs-unet-tornado-guidance-viewer.png"

# The three following tag arrays are each an array of strings. Each string (case insensitive) represents a filter from the front page. Tags that do not correspond to a current filter will be ignored for filtering; these can be used in the future if a new filter is created later.

# options: atmosphere, climate, weather, oceans, sun-earth interactions, fire dynamics, solid earth, recent publications, experimental technologies
topicTags: ["weather"]

# options: CAM, CESM, CM1, CMAQ, CT-ROMS, DIABLO Large Eddy Simulation, HRRR, HWRF, MPAS, SIMA, WACCM, WRF
modelTags: [""]

# options: Blender, Maya, NCAR Command Language, ParaView, Visual Comparator, VAPOR
softwareTags: [""]

# Case insensitive string describing the main media type. This is displayed in the post heading as a small tag above the title, as well as a tag on the card.
# options: App, Exhibit, Infographic, Video, Web Interactive.
mediaType: "Web Interactive"

# The following headings and subheadings are provided examples - unused ones can be deleted. All Markdown content below will be rendered in the frontend.
---

<iframe src="https://ncar.github.io/utorview-forecast/"></iframe>

A recreation of an [existing web visualization](https://ai2es.github.io/utorview/) showing machine learning model prediction outputs of tornadoes on a map. This web interactive uses React and Next.js, two modern web frameworks, to organize the page layout and respond to user actions (such as changing the date and time, scrubbing through timestamps, choosing ensemble members to view, and clicking cells on the map to generate spaghetti plots). 

<br />

This interactive took design inspiration from websites such as [Pivotal Weather](https://www.pivotalweather.com/model.php?fh=loop&dpdt=&mc=#), which uses sliders that allow users to quickly compare model outputs over time.

<br />

The data underlying this visualization consists of [msgpack](https://msgpack.org/index.html) files stored in an Azure cloud object storage bucket.

___

#### About the Science

##### Science Credits

Science, computer modeling, and data all courtesy of the [MILES](https://www.cisl.ucar.edu/miles) group at NSF NCAR. Project completed in collaboration with DJ Gagne.

___

#### About the Visualization

##### Visualization and Post-production

Tammy Zhang (refactored version). The original dashboard was designed and developed by Charlie Becker

##### Visualization Software

Numerous open-source web libraries, including React, Next.js, and TanStack Query. Material UI was also used for the user controls.

___

#### More Information

##### Code

See the repository for this interactive [here](https://github.com/NCAR/utorview-forecast).

##### Acknowledgements

The website this project iterated on was originally created by DJ Gagne and the MILES group, accessible [here](https://ai2es.github.io/utorview/). See [here](https://github.com/ai2es/utorview/tree/main) for the code.
