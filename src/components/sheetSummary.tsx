import useBaseUrl from "@docusaurus/useBaseUrl";

interface SheetSummaryProps {
  imgPath: string;
  linkPath: string;
  title: string;
  description: string;
}

export function SheetSummary({
  imgPath,
  linkPath,
  title,
  description,
}: SheetSummaryProps): JSX.Element {
  return (
    <div
      style={{ position: "relative", minHeight: "100px", marginBottom: "1rem" }}
    >
      <img
        src={useBaseUrl(imgPath)}
        style={{
          float: "left",
          width: "100px",
          marginRight: "1rem",
        }}
      />
      <div>
        <a href={linkPath}>{title}</a> {description}.
      </div>
      <div style={{ clear: "both" }}></div>
    </div>
  );
}
