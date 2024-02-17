import styled from "styled-components";

export const Container = styled.div(() => ({
  display: "flex",
  flexWrap: "wrap",
}));

export const CardContainer = styled.div(() => ({
  display: "flex",
  height: "30vh",
  width: "18vw",
  border: "2px solid #a97c41",
  margin: "15px 5px 5px 5px",
}));

export const NameSection = styled.div(({ color }) => ({
  fontSize: "32px",
  color: color || "black",
}));

export const ImageSection = styled.div(({ color }) => ({
  fontSize: "60px",
  color: color || "black",
  width: "100%",
  display: "flex",
  margin: "auto 15%",
}));

export const ButtonContainer = styled.div(() => ({
  display: "flex",
  position: "sticky",
  top: 0,
}));

export const DrawButton = styled.button(() => ({
  fontSize: "24px",
  color: "#ffffff",
  backgroundColor: "#488aec",
  borderRadius: "10px",
  height: "8vh",
  width: "20vw",
}));
