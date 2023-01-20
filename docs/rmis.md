---
comments: true
---
# (Remote) Management Information Systems
R / MIS are useful for tracking infrastructure quality and the progress of complex projects and / or those that involve many sites. Ideally, activity data is connected to indicators (outcome / impact) and risks.

## Definition

 An R / MIS is a web-based or desktop software system used to
 systematically collect, validate, store, manage, monitor, aggre- gate,
 process, analyze, visualize, and / or publish data and informa- tion
 on a project, a portfolio, or the core processes of an organi- zation
 for monitoring and management purposes. It often offers interfaces to
 mobile data collection tools.

## How to select an R / MIS?

### Step 1: Check the Digital Principles

 Before designing or selecting any R / MIS, the nine  [Principles for Digital Development](https://digitalprinciples.org) should be considered.

### Step 2: What Information Do I Need?

 Which type of information is required, with which frequency? Is the main purpose monitoring and / or management? The information
 needs determine R / MIS modules and functionalities:

-   Data collection (web / mobile, GPS-location, time stamp, pictures)
-   Data management (data relations / validations)
-   Data processing and analysis (aggregation / contribution to goals)
-   Data visualization and publishing (dashboards, charts, maps)
-   Import / export of data (manual / programming interfaces) Who has
    access to which parts of the R / MIS also needs to be defined (the
    license model of the R / MIS must ensure sufficient access to the
    system).

### Step 3: Which Institutional Approach to Select

 Before the selection of an adequate R / MIS software and the design of
 the Terms of Reference, a decision is needed about which of the
 following three cases is applicable:

 **Case A:** A new R / MIS is designed as a (long-term) system to
 digitalize the core processes of the Project Executing Agency (PEA) as
 part of a digitalization / eGovernance project. This includes
 generating the information relevant to the specific project(s).

 **Case B:** The extension or integration of an already existing R / MIS of the PEA is designed to additionally manage or monitor the specific project(s).

 **Case C:** A new R / MIS is designed solely for the monitoring or
 management purposes of the specific project(s) and separately from
 existing PEA systems.

## After selecting the institutional approach, you need to consider the following options and requirements:

### Types of Hosting

-   Hosting on the PEA / consultant's own server

-   Cloud-based hosting of the R / MIS (Software-as-a-Service, SAAS)

### Software cost structure model:

 Is an initial, one-time payment with no / low ongoing (license) costs
 preferred? Can ongoing (license) costs be covered beyond the project
 period? Are customizations possible?

 It must be decided which software category is appropriate for the
 setup of the R / MIS. In all three categories, open- source and
 proprietary solutions are available. In general, **open-source solutions are preferable** ([> RMMV Guidebook Section 2.2.2](https://www.kfw-entwicklungsbank.de/Service/Publications-Videos/Publications-by-topic/Digitalisation/RMMV-Guidebook/)).

#### Customized software

 Tailor-made solutions meeting the specific needs and requirements of a
 project, portfolio, or organization.

*Advantages:*

 - Customized to reflect the exact needs, structures, and features
 - Suitable for complex project setups with a high number of users and access / approval levels
 - Connectors for exchange with other tools can be programmed
 -  Usually lower or no licensing costs (none if open source) -- Usually higher costs for (initial) setup (compared to off-the-shelf tools)

*Disadvantages:*

- Setup requires IT expert resources
- Usually longer implementing period
- Ongoing costs for support and maintenance

 *Potentially suitable for Case B (if existing R / MIS is already
 customized or self-developed), Case C (if complex project, many
 users), Case A (if complex procedures, many users, AND no good
 sector-specific, off-the-shelf solutions exist).*

#### Modifiable off-the-shelf software (MOTS)

 Standard tools that can be modified on software source code level.

*Advantages:*

- Fast setup as MOTS are based on available software solutions with
 existing modules
- Customizations possible by the purchaser or by another party (if
 open source)


*Disadvantages:*

- Customizations possible only by the vendor (if proprietary)
- Setup and customizations require IT expert resources
- Ongoing costs for support and maintenance
- License costs based on time, user numbers, and support (if proprietary)

 *Potentially suitable for all cases if the project's / PEA's proce-
 dures being digitalized / established are not too complex and do not
 require too much customization.*

#### Commercial off-the-shelf software (COTS)

 Standard tools that can be used "as is" without the option to be
 modified on software source code level.

 \+ Available "out of the box" with basic functionality

 \+ Suitable for simple project setups that do not require
 customization

## Interoperability Requirements

 In which formats and structures should data be stored in the R / MIS to allow for an exchange with others relevant to the project / organization ? In general, the R / MIS must fit into the already existing IT architecture and with the existing IT knowledge of the PEA and country. The following data standards should be considered as part of the setup of any R / MIS:

-   Consider (project-specific) required file formats (e.g., CSV, XLS,
    KML, JSON) or Application Programming Interfaces (API) for data
    import and export
-   KfW requires the export of geo-referenced project data (in KML or
    XLS) according to a new template (see below) as part of its
    regular reporting. This template also ensures compatibility of the
    reporting with the International Aid Transparency Initiative (IATI)
    Standard.
-   The IATI standard is an XML-based set of rules and guidance for
    publishing data of development and humanitarian organiza- tions to
    improve their coordination, accountability, and effec- tiveness and
    to increase the transparency of information on resources flowing
    into developing countries. All BMZ-funded projects must provide
    IATI-compatible data to KfW.
-   Open Data Kit (ODK) is an XLS-based standard format for exchanging
    data between R / MIS, mobile data collection, and other compatible
    tools.
-   Sector-specific open data standards also must be considered, if they
    are applicable (e.g., EPA standard for environmental data;
    [www.epa.gov/data-standards](http://www.epa.gov/data-standards)).

## Legal Aspects

 **Data Security:** If a desktop software system is used, data secu-
 rity should be warranted by ensuring:

 that the data are protected against unauthorized or accidental
 destruction, accidental loss, technical defects, falsification, theft,
 unlawful use, unauthorized modification or duplication, and other
 forms of unauthorized access and use by technical means regular backup of data appropriate security of hardware

 If the software is provided as web-based service (SaaS), the provider should be contractually obliged to take appropriate organizational and technical precautions to prevent disruptions to the availability, integrity, authenticity, and confidentiality of their IT  systems, components, and processes essential to the functioning of the  critical infrastructures they operate. The provider should implement  data backup concepts, ensuring the protection of data against loss due to system-related failures.

**Data protection:** Wherever possible, the collection of personal data by
 the R / MIS-owner (data controller) should be avoided. If this is
 impossible, the main principles of data protection must be adhered to,
 that is, personal data shall:

 - be processed lawfully, fairly, and in a transparent manner in relation
 to the person
- be used only for the legitimate purpose in relation to the project
- be limited to what is necessary in relation towthe purposes for the
 project
- be accurate and, where necessary, kept up to date
- not be kept longer than is necessary for the purposes of the project
- be securely stored, including protection against unauthorized or
 unlawful processing and against accidental loss

 In case KfW (or persons acting on behalf of it) are (also) process-
 ing personal data, the privacy check in  [> RMMV Guidebook Section 2.3.1](https://www.kfw-entwicklungsbank.de/Service/Publications-Videos/Publications-by-topic/Digitalisation/RMMV-Guidebook/) must be followed.

 If R / MIS tools allow **tracking of employees**, legal restrictions
 on the use of such tools may arise from applicable local laws. Some
 privacy laws will give discretion to employers as to how far they can
 go with their employee monitoring programs. In other cases, employers
 will have to inform employees who are likely to be monitored or even
 require employees to consent.

## Project Examples / Use Cases

-   In the project [Fond d'Achat (FANiger; PN:
    28336)](https://www.kfw-entwicklungsbank.de/ipfz/Projektdatenbank/Programm-Reproduktive-Gesundheit-28336.htm)
    in Niger, a Health-MIS (HMIS) was created to visualize, monitor and
    manage financial data and billing. The HMIS was based on the national system and additional data collected via tablet.

-   In the [Regional Infrastructure Fonds KhyberPakhtunkhwa (RIF-KP; PN: 30272)](https://www.kfw-entwicklungsbank.de/ipfz/Projektdatenbank/Regionaler-Infrastrukturfonds-f%C3%BCr-Khyper-Pakhtunkhwa-30272.htm), an RMIS was set up to get real time information on the implementation progress regarding physical completion of works and use of funds.

-   In the [Hydropower and Renewable Energy Project (HRE; PN:27138)](https://www.kfw-entwicklungsbank.de/ipfz/Projektdatenbank/Entwicklung-von-Wasserkraft-und-erneuerbaren-Energien-in-der-North-Western-Frontier-Province-27138.htm) in Pakistan, an RMIS / Utility Information System (incl. power
    generation sensors & mobile revenue & maintenance data collection)
    was installed.

## Links to Further Sources

-   How to calculate total software cost:
    [https://digitalprinciples.org/resource/howto-calculate-total-](https://digitalprinciples.org/resource/howto-calculate-Â­total-cost-enterprise-software)
    [cost-enterprise-software](https://digitalprinciples.org/resource/howto-calculate-Â­total-cost-enterprise-software)
-   Frequently used data analysis tools
    <http://impacttrackertech.kopernik.info/data-analysis-tools>
-   About the International Aid Transparency Initiative (IATI) Standard: <https://iatistandard.org/en/about/iati-standard/>
-   How to link offline data collection to an MIS: <https://getodk.github.io/xforms-spec/>
-   KfW Terms of Reference for project geo data collection [> RMMV Guidebook Annex 3](https://www.kfw-entwicklungsbank.de/Service/Publications-Videos/Publications-by-topic/Digitalisation/RMMV-Guidebook/)

-   Health management information system: [www.openimis.org](https://getodk.github.io/xforms-spec/)

## Licence
![](https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png)

This work is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License (CC BY-NC-SA 4.0)](https://creativecommons.org/licenses/by-nc-sa/4.0/).

[Disclaimer](disclaimer.md)
