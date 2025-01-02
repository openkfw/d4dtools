---
comments: true
---

# Mobile Data Collection Tools (MDC)

## Definition

Mobile Data Collection (MDC) tools are used for collecting qualitative and quantitative information from the field
via mobile devices such as a smart-phones, tablets, or GPS trackers

## How to Select a Mobile Data Collection Tool or Platform?

### Step 1: Check the Digital Principles

The [Digital Principles](https://digitalprinciples.org/resource/howto-choose-mobile-data-collection-plaform/) provide guidance on how
to choose an MDC platform.

### Step 2: What Information Do I Need?

MDC tools can capture, organize, store, and transmit multiple media types that are collected in the
field, including text, photos, audio, and video files
together with corresponding (automatically generated) meta-data such as geo location, time stamp,
validation status, and author. MDC can be used for:

- Questionnaires/surveys (quantitative and qualitative data)
- Narrative field visit/monitoring reports
- Photos and videos (geo-tagged)
- Geo tags and geo shapes (GPS-based)
- Digital signatures/fingerprints (e.g., on consent forms)

### Step 3: Which Special Features Do I Need to Consider?

- Many MDC tools come with an offline functionality that enables users to collect data in environments with low bandwidth or no internet
  connection by storing data locally on the device
  and enabling the upload once the device is connected again (always highly recommended).
- Some tools allow users to define different roles
  with access to specific features or (web-based)
  reporting modules (useful for complex MDC
  procedures).
- Some tools can be used to transmit the collected information directly to the remote management information system (> [Fact Sheet (Remote) Management Information Systems
  (R/MIS)](https://www.kfw-entwicklungsbank.de/Service/Publications-Videos/Publications-by-topic/Digitalisation/Fact-Sheets/)) of the respective project or Project Executing Agency (PEA) for further processing.
  For this to work, both tools must be interoperable (highly recommended if a R/MIS exists or is planned).

### Software Cost Structure Model

Tools can be differentiated along the dimension open source vs. proprietary ([RMMV Guidebook Section 2.2.2](https://www.kfw-entwicklungsbank.de/Service/Publications-Videos/Publications-by-topic/Digitalisation/RMMV-Guidebook/)). While most Open Data Kit (ODK)-based solutions are open source, most customized tools, which are often an integral part of an
overarching R/MIS system, are usually based on proprietary source code. The following three categories can be differentiated:

- Customized tools
- Modifiable off-the-shelf tools (MOTS)
- Commercial off-the-shelf tools (COTS)

For pros and cons of these three options, please go to the [Fact Sheet (Remote) Management Information Systems
(R/MIS)](https://www.kfw-entwicklungsbank.de/Service/Publications-Videos/Publications-by-topic/Digitalisation/Fact-Sheets/). In case no R/MIS exists (yet), an open-source-based tool (e.g., [KoBo Toolbox](https://www.kobotoolbox.org/)) is recommended.

## Interoperability Requirements

In which formats and structures should data be stored in mobile collection tools to allow for an exchange with other systems?

- ODK is a standard format for exchanging data between MDC tools and/or R/MIS. The standard is an XLS-based form description on which many compatible tools can be based.
- If they exist, sector-specific open data standards should be considered in addition.

## Legal Aspects

**Local legal requirements** that restrict collecting project-related data by the R/MIS-owner (data controller) with MDC tools should always be complied with. For instance, some countries may prohibit photographing certain types of infrastructure.
Where necessary, the PEA should request permission from authorities before commencing the collection of data.

Wherever possible, **the collection of personal data** should be avoided. Personal data includes any information relating to an identified or identifiable
natural person. An identifiable natural person is one who can be identified, directly or indirectly, by reference to an identifier or a combination of identifiers such as a name, address, phone number or
location data of that natural person. For instance, the geo-tagged picture or video of a person or a private premise can be considered personal data if the person can be identified from the geo-tagged
location.

The project should look into technical solutions of avoiding the identification of individual persons, such as blurring their faces. Avoiding the collection
of personal data can be further achieved, for example, by anonymizing the responses to questionnaires/surveys wherever possible or by the pseudonymization of data.

If the collection of personal data cannot be avoided, the project should make sure that the main principles of data protection are adhered to, that is, personal data must:

- be processed lawfully, fairly, and in a transparent manner in relation to the person
- only be used for legitimate purposes in relation to the project
- be limited to what is necessary in relation to the purposes of the project
- be accurate and, where necessary, kept up to date
- not be kept longer than is necessary for the purposes of the project
- be securely stored, including protection against unauthorized or unlawful processing and against
  accidental loss

In case KfW (or persons acting on its behalf) are (also) processing personal data, the privacy check
in > [RMMV Guidebook Section 2.3.1](https://www.kfw-entwicklungsbank.de/Service/Publications-Videos/Publications-by-topic/Digitalisation/RMMV-Guidebook/) must be followed. In case of copyright questions or issues [RMMV Guidebook Section 2.3.4 (Rights of Use)](https://www.kfw-entwicklungsbank.de/Service/Publications-Videos/Publications-by-topic/Digitalisation/RMMV-Guidebook/).

## Project Examples/Use Cases

- In the small-scale irrigation project [in Mali (IPRO; PN 33666) many small investments](https://www.kfw-entwicklungsbank.de/ipfz/Projektdatenbank/Unterst%C3%BCtzung-des-nationalen-Programms-zur-nachhaltigen-Kleinbew%C3%A4sserungslandwirtschaft-33666.htm) are remotely monitored using MDC among other tools.
- In an urban Water and Sanitation project [in Mali (PAEPMA; PN: 32219), a smartphone app](https://www.kfw-entwicklungsbank.de/ipfz/Projektdatenbank/Programm-kleinst%C3%A4dtische-Wasser--und-Sanit%C3%A4rversorgung-32219.htm) was used to collect information about water supply systems and wells.

## Links to Further Sources

- [Online catalog of data collection tools](http://impacttrackertech.kopernik.info/digital-data-platform)
- [Overview on MDC & MDC platforms](https://www.betterevaluation.org/en/evaluation-options/mobile_data_collection)
- [Evaluation Framework and Comparison of Mobile Survey Tools for Rural Water and Sanitation Monitoring](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5036673/)
- [Guide on how to do mobile data collection](https://school-of-data.github.io/mobile-datacollection/index.html)
- [How to link offline data collection to a MIS](https://getodk.github.io/xforms-spec/)
- KfW Terms of Reference for project geo data collection in [RMMV Guidebook Annex 3](https://www.kfw-entwicklungsbank.de/Service/Publications-Videos/Publications-by-topic/Digitalisation/RMMV-Guidebook/)

## Licence

![](https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png)

This work is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License (CC BY-NC-SA 4.0)](https://creativecommons.org/licenses/by-nc-sa/4.0/).

[Disclaimer](disclaimer.md)
