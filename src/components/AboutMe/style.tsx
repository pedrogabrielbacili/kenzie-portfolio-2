import { styled } from "@/styles/stitches.config";

export const AboutMeSection = styled("section", {
  background: "$grey1",
  padding: "$section 0",
  "@mobile": {
    padding: "$sectionMobile 0",
  },
});

export const AboutMeSectionContent = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  "@mobile": {
    flexDirection: "column",
  },
});

export const AboutMeSectionText = styled("aside", {
  maxWidth: "75%",
  display: "grid",
  gridGap: "$2",
  height: "max-content",
  position: "sticky",
  top: "8rem",
  "@mobile": {
    position: "static",
    marginBottom: "$5",
  },
});
