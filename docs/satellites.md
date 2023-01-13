---
comments: true
---

# Earth Observation via Satellites

## Definition
 
  Earth Observation (EO) is a discipline that allows us to gather
  information about our planet. It often involves remote sensing sensors
  (usually onboard satellites). The data collected using satellites is
  designated as satellite or geospatial data. Optical (visible, near-
  and mid-infrared, and thermal infrared) ultraviolet and radar images
  (microwave) cover the full radiation spectrum beyond the optical
  domain.

## Setting up satellite imagery
### Step 1: Which EO Applications Should I Consider?

-   Land (all surface features, such as landscape topography, build-up,
    soil moisture, vegetation, inland waters, forestry, and agriculture)

-   Ocean (e.g., topography and currents, salinity, and surface
    temperature)

-   Atmosphere (e.g., aerosols, humidity, cloud particles, ozone, and
    trace gases)

-   Snow and ice (e.g., sea ice cover and glaciers)

### Step 2: What Information Do I Need?

  Satellites provide an excellent means for tracking changes, that is,
  comparing baseline data with the actual status and drawing conclusions
  on the impact data for many sectors and types of projects. Depending
  on project type, they can also be used for progress monitoring. Since
  they do not require intermediaries, they are often used for remote
  verification, but they can be used by all stakeholders for decision making along the project cycle and
  during every step in the project cycle (e.g., planning and appraisal,
  implementation, progress monitoring and verification, impact
  monitoring, and evaluation). Some examples:

-   **Feature mapping** (e.g., buildings, roads, landcover, and water extent)

-   **Change Detection** (e.g., urban growth, deforestation, agricultural expansion, bio-diversity monitoring, climate vulnerability,
    and glacier melting)

-   **Elevation or Digital Elevation Models** (DEM) (e.g., 3D terrain models for flood risk and 3D urban models)

-   **Monitoring in fragile or disaster contexts** (refugee routes,
    drought and floods, locusts, etc.)

### Step 3: What Should I Consider When Acquiring Satellite Imagery?
 
  First, define and formulate your information need. Your need (e.g.,
  detecting deforestation in the Amazon) will direct you to choose the
  type of satellite image suitable for your case and analysis. Your
  options:

-   **Open and free-access satellite data:** this includes most of
    optical and radar satellites from public-funded satellite missions
    from the EU and the US (such as, Landsat, Sentinel or  ASTER). These data are available with high and low resolutions under
  free and open data policies and are accessible through several
  platforms (e.g., through the USGS, the Landsat mission, and Copernicus
  Access Hubs) (see [Links below](#links-to-further-sources)). The [Fact Sheets Geospatial Tools and Data Sources](gis.md) provide
further information regarding free and open access to satel-
lite imagery. KfW’s evaluation department has initiated a
search engine for open geodata sets called [mapme](https://mapme.
shinyapps.io/geodata)

-   **Commercial satellite data** (privately funded or sometimes
    publicly funded missions accessible for free under restricted terms
    (proposals, project context, research) or against a commercial
    fee): If the imagery requirements are much higher (e.g., very high
    resolution, near-real time, tight observation windows), the image
    data products will need to be purchased under commercial licenses
    from EO industry platforms directly (see [Links below](#links-to-further-sources)) or using image broker services.

-   **Satellite Image data** from public or commercial sources **can be
    procured at various processing levels**, also saving several
    preprocessing steps and thus time and cost (the pre- processing levels include radiometric, atmospheric, geometric
  corrections and orthorectification using DEM). This will ensure the
  correct geolocalization of the images and the correct atmospheric
  effects.

-   **Specialized image processing and GIS experts** might have to be recruited to process and interpret the data.

### Step 4: Which Types of Satellite Sensors Are Required (Remote Sensing)?

-   **Optical imagery (passive remote sensing technique):** Uses the
    sunlight reflected by the Earth's surface and records the visible
    and near infra-red spectral range of the light spec- trum. This
    requires further processing to derive *maps for vegetation types,
    crop vitality, or water quality, for example.*

-   **Radar** (Radio Detection and Ranging, **active remote sensing
    technique):** This involves sending in the microwaves part of the
    light spectrum and recording independently from sunlight. The
    returned echos from the Earth targets to the satellite sensor are
    called backscatter. Besides the intensity of the backscatter
    (reflected microwave signals), the phase and polarization of the
    returned signal are stored as well in the image pixels. Microwaves
    are very sensitive to metal structures and soil moisture and can
    penetrate the Earth's surface to different depths according to their
    wavelength under certain conditions. RADAR images contain
    complementary information to optical imagery especially in
    atmospheric conditions of quasi-permanent cloud cover in some
    regions of the world. This type of imagery can be highly
    substituting or complementary. *Examples: detection of power
    poles, deforestation, geological structures, and buried wadi
    (river) courses.*

-   **LiDAR** (Light Detection and Ranging, **active remote sensing
    technique**): also known as laser detection and ranging (LaDAR) or
    optical radar which uses electromagnetic radiation in the optical
    range (laser) to determine the distance between the object and the
    instrument. It can be onboard a plane, drone, or satellite. This
    technique primarily allows the estimation of the elevation of the
    Earth's surface and Earth targets.

## Image Data Processing

  Image processing is a set of mathematical methods and algo- rithms
  that allow the extraction of useful, so-called thematic information
  from images (e.g., processing of a satellite image to map land use and
  land cover, to identify built-up areas, to extract water bodies, or to
  estimate the crops yields or vegetation health, etc.). Usually, the
  image processing towards the derivation of the thematic product will follow steps. *Examples of a few* processing steps are: geometric-correction, selection of optimal band
  combinations, contrast and spatial enhancement, and feature extraction
  and classifications (using machine learning algorithms) and
  visualization true and false color enhancement.
 
  Image processing tools are software applications (ESA SNAP, GRASS-GIS,
  ERDAS, or coding language libraries available for customized
  processing flows) that aid in the visual, semi-auto- matic
  interpretation or fully automated analysis of remote sensing data
  using complex algorithms. The goal is to produce additional derived
  information that is not necessarily visible or is badly visible to
  human eyes but is contained in the image radiometric information ([Fact Sheet Geospatial tools](gis.md)).

## Standards and Interoperability Requirements

-   At KfW, a geo data project template is being developed that uses the
    International Aid Transparency Initiative location attributes, and
    the Open Geospatial Consortium (OGC) for feature classes  ([see RMMV Guidebook Annex 3](https://www.kfw-entwicklungsbank.de/Service/Publications-Videos/Publications-by-topic/Digitalisation/RMMV-Guidebook/))

-   Additional standards/definitions/requirements from estab- lished
    international initiatives should be considered depending on the
    sector, for example: the Multinational Geospatial

  Co-production Program (MGCP); for vegetation mapping: the Land Cover
  Classification System (LCCS) from the Food and Agriculture
  Organization (FAO); for land cover in a non-arid environment:
  Copernicus EAGLE; for forests: Reducing Emis- sions from Deforestation
  and Forest Degradation (REDD+, MRV following IPCC guidelines).

-   File-formats for handling image (raster) and (vector) data are
    manifold. It is recommended in both cases to use industry standards
    for data exchange, such as GEOTIFF and SHP. Important is the
    preservation of any coordinate information, the meta-data, and
    keeping track of the pre-processing that the image has undergone to
    warrant full GIS operability.

## Legal Aspects

  **National legislation** is generally not applicable to imagery from
  space.
 
  **Human rights risks:** In countries with human rights issues or in
  conflict settings, satellite images could be used against the pop-
  ulation or vulnerable parts thereof, such as minorities, if they are
  used to identify individual households when combined with sur- vey
  data or other sources of information. This information could be used
  for discriminatory policies, (state) terror attacks, and so on.
  Careful attention to data protection and data security (below) is
  required in order not to risk harming individuals or groups (see [RMMV Guidebook Section 2.3.3](https://www.kfw-entwicklungsbank.de/Service/Publications-Videos/Publications-by-topic/Digitalisation/RMMV-Guidebook/)).

  **Data protection:** Very high-resolution images (finer than 0.31 m)
  or combined with other identifiers, such as address information,
  tracking of individuals, and groups and their movements  ("patterns of life"), for example, through data mining can cause an
  invasion of personal privacy. Avoid this by choosing lower resolution
  images, blurring individuals visible in the images, and by avoiding
  triangulating the images with personal data. Only strictly relevant
  personal data should be collected and processed by the data
  controller. If initial data minimization is impossible, data must be
  anonymized (e.g., by blurring or pixilation) (see [RMMV Guidebook Section 2.3.1](https://www.kfw-entwicklungsbank.de/Service/Publications-Videos/Publications-by-topic/Digitalisation/RMMV-Guidebook/)).

  If KfW (or persons acting on its behalf) is (also) processing personal data, the privacy check in [RMMV Guidebook Section 2.3.1](https://www.kfw-entwicklungsbank.de/Service/Publications-Videos/Publications-by-topic/Digitalisation/RMMV-Guidebook/) must be followed.
 
  **Data security requirements** can also arise from data protec- tion
  regulations (local and/or GDPR), which stipulate basic secu- rity
  requirements for storing and processing satellite images.
 
  Entities may be required under those rules to ensure the ongoing
  confidentiality, integrity, availability, and resilience of storing
  and processing systems and services (technical and organizational
  measures) [RMMV Guidebook Section 2.3.2](https://www.kfw-entwicklungsbank.de/Service/Publications-Videos/Publications-by-topic/Digitalisation/RMMV-Guidebook/)

## Project Examples / Use Cases

-   In the [Improving Energy Efficiency in Rural Areas in
    Vietnam](https://www.kfw-entwicklungsbank.de/PDF/Evaluierung/Ergebnisse-und-Publikationen/PDF-Dokumente-R-Z_EN/Vietnam_Energie_2020_E.pdf)
    [Project (BMZ: 2009 66
    663)](https://www.kfw-entwicklungsbank.de/PDF/Evaluierung/Ergebnisse-und-Publikationen/PDF-Dokumente-R-Z_EN/Vietnam_Energie_2020_E.pdf),
    impact was evaluated by measuring changes in nightlight on the
    satellite.

-   In the city development project, [Innercity Bypass in
    Lomé/Togo](https://www.kfw-entwicklungsbank.de/PDF/Evaluierung/Ergebnisse-und-Publikationen/PDF-Dokumente-R-Z_EN/Togo_LomÃ©_2019_E.pdf)
    [(BMZ: 2009 67
    182)](https://www.kfw-entwicklungsbank.de/PDF/Evaluierung/Ergebnisse-und-Publikationen/PDF-Dokumente-R-Z_EN/Togo_LomÃ©_2019_E.pdf),
    satellite images were used to evaluate increases in the numbers of
    trucks and upgraded buildings.

-   In an [irrigation project in Mali (PN:
    39309)](https://www.kfw-entwicklungsbank.de/ipfz/Projektdatenbank/UnterstÃ¼tzung-des-nationalen-Programms-zur-nachhaltigen-KleinbewÃ¤sserungslandwirtschaft-in-Timbuktu-und-Mopti-39309.htm),
publicly available satellite data was used to supervise construction, verify and estimate crop yield, and maintain an alarm system of cultivated (rice) areas.

## Links to Further Sources

-   [The KfW evaluation department's geodata locator list](https://mapme.shinyapps.io/geodata/ )

-   [Earth Observation Handbook](http://eohandbook.com/sdg/)
-   [Remote Sensing Guide](https://fis.uni-bonn.de/en/recherchetools/infobox/professionals)

-   [Basics (guide) on resolution types](https://landscape.satsummit.io/capture/resolution-considerations.html)

-   [Database of agencies and missions](http://database.eohandbook.com/measurements/overview.aspx)
-   [Copernicus Open Access Hub](https://scihub.copernicus.eu/)

-   In the satellite imagery [platform UP42](https://up42.com/ )), credits are purchased to
    acquire VHR satellite imagery mainly from Airbus image provider
    (SPOT and Pléiades with Spatial resolution up to


-   [MAXAR](https://www.maxar.com) platform

-   [Planet explorer platform](https://www.planet.com/explorer): access
    granted by the Norwegian government through the NICFI initiative to
    preserve tropical forests and support  the climate agenda on the AFOLU sector, offering imagery with spatial
  resolution up to 4 m.
 
## Licence
![](https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png)

This work is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License (CC BY-NC-SA 4.0)](https://creativecommons.org/licenses/by-nc-sa/4.0/).

[Disclaimer](disclaimer.md)
