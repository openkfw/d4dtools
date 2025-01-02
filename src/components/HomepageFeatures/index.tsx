import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
  url?: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "General Factsheets",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        We provide general factsheets on various digital tools for
        development.
      </>
    ),
    url: "docs/",
  },
  {
    title: "Climate resilience",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        With the rising importance of climate resilience we have created
        specific factsheets on tools that support within this context.
      </>
    ),

    url: "docs/climate-resilience/",
  },
];

function Feature({ title, Svg, description, url }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        {url && (
          <p>
            <a href={url}>
              Learn more 
            </a>
          </p>
        )}
      </div>
      
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="row justify-content-center" style={{ display: 'flex', justifyContent: 'center' }}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
