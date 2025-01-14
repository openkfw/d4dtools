---
comments: true
---

# Artificial Intelligence (AI)

:::info[Work in progress]

    Subsection on legal aspects is still being finalized. 

:::

## Short overview
------

### General Description

**Artificial intelligence (AI)** can be described as the type of algorithms and hence methods modeled like the decision-making process of a brain. AI models or methods can learn from available data and become more accurate with time; they mimic what a human would do ([Manning 2020](https://hai.stanford.edu/sites/default/files/2020-09/AI-Definitions-HAI.pdf); [IBM 2024](https://www.ibm.com/think/topics/ai-infrastructure)).

**Machine learning (ML)** is a subclass of AI that focuses on the development of algorithms that enable computers to learn from and make decisions based on data. ML can be described by the training of models on data to recognize patterns and make corresponding predictions without the intervention of humans ([Brown 2021](https://arxiv.org/abs/2110.01889)).

**Deep learning (DL)** describes a subclass of ML mainly focusing on algorithms that make use of neural networks with many layers (hence deep). These networks are structured a little like neurons in humans ([Manning 2020](https://hai.stanford.edu/sites/default/files/2020-09/AI-Definitions-HAI.pdf); [IBM 2024](https://www.ibm.com/think/topics/ai-infrastructure)). The aim is to make predictions as with ML in general. However, DL methods excel with unstructured or unconventional forms of data rather than with classical tabular one ([Borisov et al. 2024](https://arxiv.org/abs/2110.01889)).

### Potential for Climate Change Adaptation

AI plays a role in various domains within CCA, including climate prediction, societal impacts and solar geoengineering. [Rolnick et al. 2022](https://dl.acm.org/doi/10.1145/3485128) define the following:

**Climate prediction**
 
- ***Uniting data, ML and climate science:*** ML can enhance climate models, making them more accurate or cost-effective, especially when traditional statistics are insufficient or when models are too computationally extensive. 
- ***Forecasting extreme events:*** while climate models predict long-term trends and weather models forecast short-term events, AI-enhanced models can correct biases, recognize patterns, and improve the prediction of extreme weather events, with potential for local applications. 

**Societal impacts**

- ***Ecology:*** AI assists in ecosystem monitoring and biodiversity tracking, helping to identify risks and species populations, which informs conservation efforts. 
- ***Infrastructure:*** ML models can help design and maintain infrastructure by identifying vulnerabilities to climate impacts like flooding and enabling predictive maintenance. 
- ***Social systems:*** investments in social infrastructure can increase the resilience of communities and societies. ML can support by predicting food shortages, supporting livelihoods, aiding displaced populations, and assessing health risks from extreme weather.
- ***Crisis:*** AI can enhance disaster and health crisis management by improving disease surveillance and generating damage assessment maps.

**Solar geoengineering**

- ***Understanding and improving aerosols:*** ML can assist in understanding the effects of aerosols for their use in solar reflection and temperature reduction. Given their chemical characteristics and available data, it can also support modeling their impacts, reducing computational demands for accurate predictions.
- ***Engineering a control system:*** Bayesian and neural network-based approaches can support real-time uncertainty-aware decision-making. In engineering Solar geoengineering, such decisions need be based on flexible, but accurate models.  
- ***Modelling impacts:*** As aerosols are chemical components spread to the sky, they might have consequences beyond temperature and global warming. To understand what this might be, DL can for example help model aerosol effects on health and thus guide decisions on geoengineering applications based on their impact. 

### Potential for Disaster Risk Management

ML and DL support DRM across different stages. AI contributes with prevention through the identification of the potential risks affecting a specific environment, including urban areas. It also supports preparedness by identifying the most effective approaches for response ([Rolnick et al. 2022](https://dl.acm.org/doi/10.1145/3485128)). Furthermore, it supports the response by enabling up-to-date monitoring schemes whose processes can be automated, and finally, it assists recovery by effectively identifying damaged ecosystems and areas. Additionally, it aids in prioritizing measures and searching for alternative ways to recover.

## Application in different Climate Hazards
------

### Flooding

AI tools can predict floods by analyzing historical satellite imagery ([Patel 2024](https://dev-patel.com/content/Floods.pdf)) or data provided by river sensors ([Sit and Demir 2019](https://doi.org/10.48550/arXiv.1902.02308)). The flood definition used by AI models can be calibrated by the experience and opinions of local inhabitants ([Patel 2024](https://dev-patel.com/content/Floods.pdf)), creating a context-specific and locally adequate model that supports prevention and preparedness. Furthermore, AI tools can accelerate the dissemination of information ([Imran et al. 2015](https://doi.org/10.48550/arXiv.1407.7071)), thereby improving preparedness and response.

### Sea Level Rise

AI has the potential to increase the accuracy in sea level predictions, particularly through improved satellite imagery in polar regions ([Rolnick et al. 2022](https://doi.org/10.1145/3485128)). Furthermore, tools like NASA’s sea level prediction tool ([NASA Sea Level Change Portal n. d.](https://sealevel.nasa.gov/ipcc-ar6-sea-level-projection-tool)) or NVIDIA’s Omniverse platform ([NVIDIA n. d.](https://www.nvidia.com/en-us/omniverse/)) represent potential scenarios, aiding better planning and awareness. The latter tool has already been used for visual representations of corresponding scenarios in Tonga ([Onyeator 2023](https://thecommonwealth.org/news/commonwealth-nvidia-partners-leverage-artificial-intelligence-climate-action)).

### Landslide

AI models have the potential to help monitoring, and mapping landslide risks, thus aiding climate-resilient urban planning. However, technical challenges relating to the level of uncertainty to accept during modelling to classify localized infrastructure, as a road, as completely susceptible to landslides in a specific period, limit their application. This is connected to the high costs the corresponding preparations would entail. Nevertheless, ML methods can help to effectively identify areas that are prone to landslides, guiding development strategies ([Thirugnanam 2022](https://doi.org/10.1007/978-3-031-18471-0_20); [Basheer et al. 2022](https://documents.worldbank.org/en/publication/documents-reports/documentdetail/099356212142224352/idu1aab5df2016d2814a3c1bf5b11897f7cbd136)).

### Water Scarcity / Drought

Models can optimize water management in scarcity contexts, enhancing demand forecasting, leakage detection, and consumption assessment ([Fu et al. 2022](https://doi.org/10.1016/j.watres.2022.118973); [Fu et al. 2023](https://doi.org/10.1017/wat.2023.15)). DL models face challenges like data quality and hence they have been mainly used for leakage and contamination detection ([Fu et al. 2022](https://doi.org/10.1016/j.watres.2022.118973)). However, data collection through IoT and its integration with AI models can support these efforts.

### Strong Winds / Storms

Like in the case of floods, the application of AI is mostly focused on increased predictive capabilities. DL models have already been developed to enhance the prediction of storms, cyclones and hurricanes  ([Liu et al. 2016](https://worldcomp-proceedings.com/proc/p2016/ABD6152.pdf); [Kurth et al. 2018](https://dl.acm.org/doi/10.5555/3291656.3291724); [Racah et al. 2017](https://doi.org/10.48550/arXiv.1612.02095)). AI can support decision-making and enhance prevention and preparedness.

### Forest / Bush Fires

AI can be used to predict forest or bush fires and enhance preparedness, contributing also with damage mapping and evacuation route planning ([Zarghami and Dumrak 2021](https://www.doi.org/10.47389/36.1.84)). Methods range from simple logistic regressions to complex neural networks.

### Extreme Temperatures

As with landslides, floods and storms, extreme temperatures can be better predicted using AI models. Challenges and opportunities are similar. The accuracy of predictions depends on the adequate AI training, as such extreme events are rare per definition.

### Saltwater Penetration

AI models can assess saltwater intrusion risk in coastal areas. [Moazamnia et al. (2020)](https://doi.org/10.1016/j.jenvman.2019.109871) demonstrate such an effort in the context of the salt-lake Urmia in Iran. The mix of methods and approach denotes potential of the application of the approach in other settings.

## Application in DRM / CCA Measures
------

### Nature-based Solutions 

AI’s predictive capabilities can enhance the efficiency of nature-based solutions by simulating impacts and suggesting implementation sites. AI can also be integrated into a hybrid framework, where it works in conjunction with expert knowledge. It can work on the basis of a repository, composed out of past examples and experiences evaluated by experts, and hence propose measures on a case-by-case basis alongside relevant examples ([Sarabi et al. 2022](https://doi.org/10.1016/j.jenvman.2022.116413)). Furthermore, the integration of remote sensing and IoT microsensors in urban green spaces can improve data quality ([Urban Systems Lab n. d.](https://urbansystemslab.com/big-data-artificial-intelligence)), supporting better AI model training.

### Integrated Coastal Zone Protection

AI models can support coastal zone protection through modelling pollutant and sediment transport, coastal monitoring, and oceanographic predictions ([Pourzangbar et al. 2023](https://doi.org/10.3389/fenve.2023.1235557)). It can also map vulnerability in urban areas, aiding resilience efforts to protect infrastructure and the population ([Atmaja and Fukushi 2022](https://doi.org/10.5194/isprs-annals-V-3-2022-517-2022)).

### Stormwater Management

AI models can help predict weather events and monitor water systems ([Fu et al. 2022](https://doi.org/10.1016/j.watres.2022.118973)), potentially enabling cities to collect and use stormwater as a resource. However, the evidence for this application is still limited.

### Waste Management

AI tools and applications span from route planification for waste trucks, to classification of waste and the prediction of waste generation patterns ([Xia et al. 2021](https://doi.org/10.1177/0734242X211033716); [Fang et al. 2023](https://doi.org/10.1007/s10311-023-01604-3)).

## Relevance within the Project Cycle
------

AI can be helpful throughout all phases of the project cycle.

**Project Preparation:**
AI can enhance project preparation by modelling hazard impacts and predicting vulnerabilities. Models can analyse data from sensors and satellites to identify risks, informing resilient project designs. DL excels in processing unstructured data, detecting environmental patterns that traditional methods might miss, supporting adaptive planning.

**Project Implementation:**
 
AI can support by analysing real-time data from IoT sensors and drones to track progress and monitor conditions. ML can hence optimize resource distribution, ensuring timely adjustments. 

**Verification of Project Progress:**

AI can verify project progress by analysing consumption and environmental data, providing comparisons of actual outcomes against projections. AI models can further detect anomalies and flag inconsistencies.

**Final Project Review:**
 
AI can support assessing project outcomes by comparing results to benchmarks or alternative scenarios. It can thus highlight project impacts. For instance, DL can process geospatial and visual data, revealing subtle changes and refining evaluations.

**Ex-Post Evaluation:**

AI can support long-term monitoring using satellite imagery and sensors. By comparing post-project data to counterfactuals, it can inform future project designs.

## Technology Requirements
------

The application of AI depends on setting up the adequate context for its use, installing adequate infrastructure and nurturing the capacities to operate models and extract valuable information.

### Context

- ***Computing infrastructure:***  infrastructure: high-performance CPUs, GPUs, and sufficient RAM are essential with large DL implementations potentially requiring supercomputers or rented servers ([Ben Zvi 2022](https://towardsdatascience.com/another-deep-learning-hardware-guide-73a4c35d3e86); [Flinders and Smalley 2024](https://www.ibm.com/topics/ai-infrastructure)).
- ***Storage capacity:*** models with massive data, like terabytes of satellite imagery, need extensive and adaptable storage capacities. Cloud instances are an especially viable solution for expanding datasets ([Ben Zvi 2022](https://towardsdatascience.com/another-deep-learning-hardware-guide-73a4c35d3e86); [Flinders and Smalley 2024](https://www.ibm.com/topics/ai-infrastructure)).
- ***Networking infrastructure:*** fast, reliable network for data transfer, distributed computing and real-time AI applications ([Flinders and Smalley 2024](https://www.ibm.com/topics/ai-infrastructure)).
- ***Security measures:*** AI systems dealing with sensitive data must implement strong privacy measures ([IBM 2024](https://www.ibm.com/topics/ai-infrastructure)).
- ***Scalability*** infrastructure must accommodate model or application expansion, as computational demands change rapidly ([Ben Zvi 2022](https://towardsdatascience.com/another-deep-learning-hardware-guide-73a4c35d3e86); [Flinders and Smalley 2024](https://www.ibm.com/topics/ai-infrastructure)).

### Input

- ***Data:*** AI algorithms require large, high-quality datasets for effective training. Poor data quality can severely impact performance.

### Process

- ***Expertise:*** developing AI tools requires expertise in model definition, training and dataset selection.
- ***Interdisciplinary knowledge:*** incorporating domain-specific knowledge is utmost important for scoping and solving problems with AI.
- ***Stakeholder engagement:*** engage relevant stakeholders during the development of AI to ensure results are practical and useful ([Donti et al. 2024](http://www.chatziva.com/PSCC2024Tutorial/5_PSCC2024_Tutorial_Donti.pdf)).

## Legal Aspects
------

***Text in progress***

## Summary Assessment
------

### Overall Effectiveness

AI tools as delineated in the realm of ML and DL here, can be of great use for city planners and general urban management, particularly in relation to resilience building. Predictions can be made accurately, while monitoring schemes can provide detailed results and guidelines in more concise terms. The potential of AI for cities is diverse.  They can enhance effectiveness; however, models need to be chosen and trained according to the needs of a specific task. AI does not provide universal solutions for every problem in one single format. Additionally, there are tasks AI will not be able to address. Hence, while the use of AI can have notorious impacts in establishing resilient urban settlements, their application needs to be guided by context and domain-specific knowledge.

### Overall Efficiency

AI can be efficiently integrated into urban management for resilient cities. The set of tools and implementations are varied and will only keep on growing. Generative foundation models that can generate artificial satellite imagery are already available ([Yu et al. 2024](https://doi.org/10.1016/j.fmre.2024.06.003)). Hence, testing and training models with geospatial tools is becoming easier by the day, as data availability is increasing, and such possibilities are expected to multiply. 
While integration into current schemes is feasible, and reorganizing processes is conceivable ([Milojevic-Dupont and Creutzig 2021](https://doi.org/10.1016/j.scs.2020.102526)) there is a pressing need for corresponding expertise. As the number of models increases, it can become harder to disentangle which might be more useful in a specific case and when to change it. Beyond the technical knowledge required to choose, implement and train the models, a second set of expertise is needed to maintain their infrastructure.
Therefore, the successful implementation of AI in these processes will only be achievable once the expertise in the administration is guaranteed, despite its great potential. This may take many forms, such as cooperation with institutions or subcontracting arrangements. At the same time, the protection of data privacy, ethical considerations and the respect of regulatory guidelines will be paramount.

### Key Challenges and Limitations

Challenges relating to the implementation of AI are closely related to the requirements of this digital solution. Infrastructure and expertise prerequisites might limit its application considerably. Furthermore, ethical and human rights considerations stand as a challenge that needs constant evaluation. While AI methods are accurate and very useful, models need to be appropriately trained and their legitimacy carefully built. If people or government employees do not trust AI-based results, then their implementation will have limited impact. Additionally, adhering to ethical and regulatory guidelines is critical, with frameworks like that of the UN Advisory Body on Artificial Intelligence ([2024](https://www.un.org/sites/un2.un.org/files/governing_ai_for_humanity_final_report_en.pdf)) or the EU AI act ([Madiega 2024](https://www.europarl.europa.eu/RegData/etudes/BRIE/2021/698792/EPRS_BRI(2021)698792_EN.pdf)) guiding compliance. For more comprehensive information on these challenges and limitations, see the [Principles for Digital Development](https://digitalprinciples.org/), the [Global Digital Compact](https://www.un.org/global-digital-compact/en), as well as [Mejias and Couldry (2024)](https://press.uchicago.edu/ucp/books/book/chicago/D/bo216184200.html).

Overcoming and navigating these prerequisites and potential problems is challenging. Engaging with stakeholders from all levels might help address these problems. Furthermore, education about the uses of AI and its limitations by nature might help as well. 

Finally, environmental considerations must be made about the use of AI and how it can hinder climate action in the long run if not taken into account. Large AI models consume significant energy and water ([Luccioni et al. 2024](https://doi.org/10.1145/3630106.3658542); [Rogers 2024](https://www.wired.com/story/ai-energy-demands-water-impact-internet-hyper-consumption-era/)). AI in this context will unlikely have such size, still, it is important to consider its impact. Tools as [ML CO2 Impact](https://mlco2.github.io/impact/), [CodeCarbon](https://codecarbon.io/), [Carbontracker](https://github.com/lfwa/carbontracker), or those specific for [Azure](https://techcommunity.microsoft.com/t5/green-tech-blog/charting-the-path-towards-sustainable-ai-with-azure-machine/ba-p/2866923) or [HuggingFace](https://huggingface.co/blog/carbon-emissions-on-the-hub) can support this.


### Recommendations to optimize the Use of the Digital Tool

To implement effective AI systems that are properly integrated in urban CCA or DRM processes, it is crucial to consider their prerequisites. Effective resource allocation is vital, as AI infrastructure can be expensive to maintain and scale, especially with rented servers ([Ben Zvi 2022](https://towardsdatascience.com/another-deep-learning-hardware-guide-73a4c35d3e86); [Flinders and Smalley 2024](https://www.ibm.com/topics/ai-infrastructure)).
Beyond these requirements, engaging with citizens and integrating results in social media and official government channels will enhance public engagement. As with any government initiative, legitimacy is key to its success or failure. If AI systems are perceived as legitimate, their results will be acknowledged, and recommendations will be implemented. Results need to be presented in non-technical language for the understanding of policymakers and a more general public. It is also important to understand that AI models have clear limitations that must be communicated. 
Overall, AI faces similar hurdles as other technical systems at the city government level. Learning about how these systems have overcome issues, become legitimate and are integrated in decision-making processes is recommendable.
In order to identify and mitigate AI-related human rights risks within KfW-financed projects, we recommend to use the [KfW Human Rights Check for Financial Development Cooperation](https://digitalrights-check.bmz-digital.global/kfw/) during project preparation and implementation.

## Project Examples / Use Cases
------

- [Milojevic-Dupont and Creutzig (2021)](https://doi.org/10.14279/depositonce-11067) propose a general ML implementation architecture for cities, which they call “Machine Learning for Low Carbon Urban Planning (ML-UP)”. Although this structure is mainly thought of for structuring an urban mitigation system, there are conceivable extensions towards adaptation and resilience. The authors identify four main domains of use of ML in climate mitigation in cities: (1) mapping the infrastructure, (2) improving energy efficiency, (3) identifying behavioural patterns and (4) infrastructure planning. The points 1, 2, and 4 are directly transferable into the context of urban climate change adaptation, as monitoring the city in all its dimensions can help identify areas where adaptation is needed and where dynamics and systems may already be adjusted. Specifically, the idea of a more automatized process which makes use of different data sources to aid decision-making connects with urban resilience planning efforts.

- A further area of application is the management of water. Water scarcity represents an issue many urban settlements will actively confront in the future. In low- and middle-income countries especially, a related issue arises due to the lack of residential consumption data. This has the consequence that patterns of usage cannot be optimized. Moreover, a general water management scheme that plans for the future must properly understand consumption. 
To this aim, [Tesfay Abraha et al. (2024)](https://doi.org/10.1038/s41545-024-00309-6) conducted a study demonstrating how to integrate ML into a prediction model of household water consumption in Adama city in Ethiopia. This prediction model was composed out of data sources coming from the city’s water management body and surveys. They obtained a corresponding level of accuracy and thus show an approach to overcome data shortages and hence ensure the sustainable development of water supply systems. Specifically, such a model can represent an approach for many cities in data-scarce landscapes to support monitoring efforts and adaptation towards water shortages.

## Links to further Sources
------

- [Borisov et al. (2021): Deep Neural Networks and Tabular Data: A Survey](https://doi.org/10.48550/arXiv.2110.01889)  
- [Brown (2021): Machine learning, explained](https://mitsloan.mit.edu/ideas-made-to-matter/machine-learning-explained) 
- [Rolnick et al. (2022): Tackling Climate Change with Machine Learning](https://doi.org/10.1145/3485128)

## Linkages to other Tool Types
------

- **Data sources:** Both Big Data and Open Data function as inputs for ML and DL models. Big data might include text data from social media, where large language models (LLM) or natural language processing models (NLP) models might be useful. Open Data could also include datasets like OpenStreetMap, which can be used and analysed by both types of models.

- **Digital twins:** AI enables to perform simulations within digital twins, allowing for predictions of future states and process optimisations that can be applied in corresponding physical systems. The decision making-capability of AI can be leveraged to automate urban systems. See also [Building Information Modelling](../../general/bim.md).

- **Communication and collaboration:** AI outputs can be integrated with the communication channels of a city administration and even automate them. Similarly, e-learning tools can benefit from AI through customization of learning, production and selection of new learning materials. See also [Collaboration](../../general/collaboration.md) and [E-learning tools](../../general/elearning.md).

- **Earth observation/Geospatial Tools:** Earth observation tools make intensive use of AI models and methods. For instance, convolutional neural networks (CNN), a DL model, is extensively used when analysing satellite imagery. Furthermore, earth observation tools can function as data inputs for AI systems, supporting urban analytics processes and data-driven decision making. See also [Geospatial tools and GIS](../../general/gis.md).

- **Mobile Tools:** Mobile tools can be integrated with AI to automatize operations and customize the user experience. Algorithms can analyse data collected via mobile tools for predictive modelling, anomaly detection, and pattern recognition. Additionally, crowdsourced data can be analysed in real-time to provide immediate insights. When used as data sources, mobile tools can function as input for AI models. See also [Crowdsourcing Tools](../../general/cst.md).

- **(Remote) Management information systems (R/MIS):** AI can support systems to identify patterns and make forecasts, enabling to learn from historical data and generate more accurate analytics. Advanced MIS can incorporate artificial intelligence to process data and provide insights or automate processes of decision-making. See also [Management Maintenance Systems (MMS)](../../general/mms.md) and [(Remote) Management Information Systems](../../general/rmis.md).

- **Internet of Things (IoT):** The Internet of Things (IoT) functions as data sources for AI algorithms. With wide coverage, IoT enables comprehensive urban planning powered by AI. Additionally, AI also shapes the IoT landscape, especially through the Artificial Intelligence of Things (AIoT), a more recent class of interconnected devices. In the AIoT, an AI algorithm makes decisions on multiple devices based on the information gathered. See also [Sensors / SmartMeters (Internet of Things)](../../general/sensors.md)

## Licence
![](https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png)

This work is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License (CC BY-NC-SA 4.0)](https://creativecommons.org/licenses/by-nc-sa/4.0/).

[Disclaimer](../../disclaimer.md)
