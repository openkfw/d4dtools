# Sensors / SmartMeters (Internet of Things)

## Definition
 
  A sensor is a device that monitors changes by converting signals
  (input) continuously and automatically from analog objects into a
  digital interface (output). Technological developments have empowered
  sensor connectivity through cloud/remote access, forming a global
  infrastructure of physical and virtual, internet-connected objects called the **Internet of Things (IoT)**. A smart sensor measures and combines signal conditioning and signal
  processing within one device. For example: a *SmartMeter*
  monitors electric energy consumption in (near) real-time, communicates with a central system or smart grid, and shares usage data
  with consumers and providers for billing, data analytics, customer
  targeting, and rate recommendations. Similarly, a *Smart Water Meter*
  provides high-resolution readings, demand forecasting, scarcity
  prevention and leak notification.

## How to Employ Sensors
### Step 1: Check the Legal Framework

  Depending on usage and connectivity, sensors may require some
  regulation to ensure explicit consent and hedge privacy breaches given
  the growing concerns around fine-grained information collected by
  smart meters exposing individual behavior (private activity, daily
  routine, etc.) which need to be proactively accounted for with
  built-in controls masking personal behavior patterns.

###  Step 2: What Information Do I Need?

  A wide array of sensors and SmartMeters can be used for project
  management, (remote) monitoring, and verification. Their selec- tion
  depends on the project's information needs and is mostly
  sector-specific:

#### Energy sector

-   **Power plants:** remote monitoring (input/output parameter),
    steering of energy generation, and controling:

    -   Sensors measure parameters such as oil, air,and device temperatures, the speed of turning parts (turbine, motors), the
  physical characteristics and chemical composition of fuels, and gases
  and exhaust emissions.
    -   Sensors measure optical and acoustic parameters, among others, to remotely control power plants that have limited or no
  operation personnel at the power plant site.

    -   SmartMeter data can be used by the energy plant itself to detect/reconfigure and reroute in case of power loss, reducing
  maintenance costs.

-   **Electricity (Smart) Grid:** sensors for measuring conditions in the electricity transmission and distribution grid (e.g., voltage,
  frequency, temperature, etc.)

-  **Energy efficiency and reliability**:

    -   Sensors applied to various energy captors/processors
          (electric/gas generators, water turbines, windwheels, solar
          panels/street lighting, etc.) measure, monitor, and steer
          energy sources.

    -   Power suppliers use sensors to gather insights and offer incentives to users to use energy at non-peak times to reduce the costs of building greater capacities.

#### Water sector

-   **Wastewater and drinking water treatment plants:** sensors measure
    water quality and flow to remotely monitor and steer treatment,
    inlet- and outlet water quality, and support operations.

-   **Water and wastewater networks:** sensors are used to monitor network conditions (flow metering and pressure sensors) and
  steering (via valves, pumps).

- **Meterological and hydrological networks**:

    -   Sensors measure hydrological situations (precipitation, evaporation, temperature, river runoff, sunshine hours, etc.).

    -   Sensors measure water quality and quantity (levels of groundwater and surface waters in reservoirs and water quality
  parameters).

-   Remote data transfer (mobile cards, internet), remote control, analysis of the meterological, and hydrological data in
  computer-based systems.

#### Mobility sector

-   **Network capacity:** sensors monitor load in interconnected
    charging stations for e-vehicles.

-   **Traffic:** sensors can help in incident reporting and response, traffic directions, and parking management. They can also measure air pollution.

#### Biodiversity/Environment sector

-   **Forest and ocean protection:** sensors may be used to stop illegal
    deforestation, protect endangered species, and track waste dumping.

-   **Smart farming:** sensors measure methane levels, air temperature, rainfall, soil moisture, soil pH, etc.

### Step 3: What Do I Need to Consider When Acquiring Sen- sors?

  There are many platforms available on/offline for purchase-by- unit.
  Users may choose sensors based on:
 
  **size** (nano, micro, 2D, 3D, etc.)
 
 type of **connection**: wired/wireless
 
  **functional** requirements (offline usage and range, solarpower,
  calibration resolution, repeatability, interferences, environmen- tal
  conditions, maintenance, etc.)
 
  **non-functional** attributes (e.g., longevity, interoperability, scalability, wireless protocols, compliance with safety standards,
  etc.)
 
  **costs** (can be mitigated by industry collaboration)
 
  **accuracy** as precision requirements often drive up costs
  exponentially. Sensors often require frequent calibration to assure
  correct measurements, so you need to check if calibration services are
  available locally.
 
  **disponsability.** Sensors may offer many advantages: low-cost, easy-to-use, short-term or rapid single-point measurements, reliable
  information and digital connectivity for availability to users and
  centralized /decentralized facilities.

### Procurement of Sensor Data
Sensor datasets are siloed, often proprietary, and treated as
the exclusive preserve of the organizations collecting them.
However, traffic and meterological data is often available
for free (universities/cities).
If the application of sensors is not possible and no publicly
available datasets exist or are accessible, the use of tools
modeling synthetic datasets can be explored (meaning generated by a computer simulation that approximates real
data but is fully algorithmetically generated). Example: [dweet.io](https://dweet.io/)


### Risks and challenges to keep in mind:

-   Need for high-quality products to avoid technology distrust and
    bypassing

-   Maintenance processes are dependent on supply chain disruption when
    replacing spare parts

-   Data quality requires expertise to ensure interlinking with multiple
    data sources.

-   Data control requires expertise to avoid security breaches or data
    leaks in case of unproven encryption methods.

## Legal Aspects

  **Data protection:** Smart meters provide insights into the con-
  sumption patterns of private households and are thus sensitive in
  terms of data privacy. Data transmission is only permitted for the
  applications required for utility industry operations. The use of
  personal data for other purposes will, depending on the applicable
  law, require consent from consumers [RMMV Guidebook Section 2.3.1](https://www.kfw-entwicklungsbank.de/Service/Publications-Videos/Publications-by-topic/Digitalisation/RMMV-Guidebook/)

 
  In addition, **data security requirements** also arise from national
  data protection regulations, which stipulate basic security
  requirements to protect the collected personal data, such as
  consumption, address, and names. Entities may be required under those
  rules to ensure the ongoing confidentiality, integrity, availability,
  and resilience of processing systems and services (technical and
  organizational measures). They need to ensure that the IT security
  measures are adequate to withstand attacks from hackers or cyber
  warfare directed at critical infra-structure (see [RMMV Guidebook Section 2.3.2](https://www.kfw-entwicklungsbank.de/Service/Publications-Videos/Publications-by-topic/Digitalisation/RMMV-Guidebook/)).

## Project Examples / Use Cases

-   In the energy project, [Green Energy Corridors in India
    (GEC;](https://www.kfw-entwicklungsbank.de/ipfz/Projektdatenbank/Green-Energy-Corridors-30420.htm)
    [PN:
    30420)](https://www.kfw-entwicklungsbank.de/ipfz/Projektdatenbank/Green-Energy-Corridors-30420.htm),
    sensors are used to record data, like voltage or power, which are
    transmitted to the control system SCADA.

-   In the [Hydropower and Renewable Energy project in
    Pakistan](https://www.kfw-entwicklungsbank.de/ipfz/Projektdatenbank/Entwicklung-von-Wasserkraft-und-erneuerbaren-Energien-in-der-North-Western-Frontier-Province-27138.htm)
    [(HRE; PN:
    27138)](https://www.kfw-entwicklungsbank.de/ipfz/Projektdatenbank/Entwicklung-von-Wasserkraft-und-erneuerbaren-Energien-in-der-North-Western-Frontier-Province-27138.htm),
    sensors are used to monitor offgrid mini- hydropower plants. The
    open source-based power monitoring software was developed in a
    GIZ-project.

-   In the Hydromet Project in Jordan (Hydromet; PN: 29452), new
    measuring stations for the collection of hydrological and
    meteorological data were installed and commissioned. The measuring
    stations transmit the data via mobile data net- works to a control
    and server room.

-   In the [Water and Climate Monitoring project II in Sambia
    (PN:](https://www.kfw-entwicklungsbank.de/ipfz/Projektdatenbank/Wasser--und-Klimamonitoring-II-30888.htm)
    [30888)](https://www.kfw-entwicklungsbank.de/ipfz/Projektdatenbank/Wasser--und-Klimamonitoring-II-30888.htm),
    existing hydrological and meteorological stations were
    rehabilitated, groundwater boreholes for measuring ground- water
    were drilled and an Integrated Water Resource Manage- ment
    Information System was established.

## Links to Further Sources

-   [Regulation Framework on Sensor Technologies](https://link.springer.com/chapter/10.1007/978-1-4302-6014-1_6 )
-   [Sensors as new Data Source in DC](https://merltech.org/)
-   [Infrastructure sensing](https://www.researchgate.net/publication/304065637_Infrastructure_sensing)
-   [Smart metering market trend analysis](https://www.comserveonline.com/news-releases/middle-east-Â­africa-smart-meters-market-growth-analysis-outlook-by-trends-opportunities-and-forecast/10028252)
-   [Biodiversity applications](https://www.techrepublic.com/resource-library/downloads/the-internet-of-wild-things-technology-and-the-battle-against-biodiversity-loss-and-climate-change-cover-story-pdf/)
-   [Disposable sensors](https://onlinelibrary.wiley.com/doi/full/10.1002/adma.201806739 )
-   [Open sensor datasets](https://data.world/datasets/sensors )
-   [Commercial use of data sets](https://datarade.ai/data-categories/iot-data)