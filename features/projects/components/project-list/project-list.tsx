import styled, { keyframes } from "styled-components";
import { breakpoint, space, color } from "@styles/theme";
import { ProjectCard } from "../project-card";
import { useGetProjects } from "../../api/use-get-projects";

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: ${space(6)};

  // reset list styles
  list-style: none;
  padding: 0;
  margin: 0;

  @media (min-width: ${breakpoint("desktop")}) {
    grid-template-columns: repeat(auto-fit, 400px);
  }
`;
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const LoadingIndicator = styled.div`
height: 60vh;
display: flex;
flex-direction: column;
justify-content: center;

align-items: center;
@media (min-width: ${breakpoint("desktop")}) {
  height: auto;

`;

const LoadingIcon = styled.img`
  animation: ${rotate} infinite 2s linear;
  width: 58px;
  height: 58px;
`;

const ErrorIndicator = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  color: ${color("error", 700)};
  font-size: 14px;
  border: 1px solid ${color("error", 300)};
  border-radius: 8px;
  background: ${color("error", 25)};
  padding: 16px;
  font-weight: 500;
`;

const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const ErrorReloadButton = styled.button`
  display: flex;
  justify-content: space-between;
  color: ${color("error", 700)};
  background: ${color("error", 25)};
  font-weight: 500;
  border: none;
  min-width: 90px;
  padding: 0;
  margin: 0;
`;

export function ProjectList() {
  const { data, isLoading, isError, error, refetch } = useGetProjects();

  if (isLoading) {
    return (
      <LoadingIndicator>
        <LoadingIcon src="/icons/loading-1.svg" alt="loading" />
      </LoadingIndicator>
    );
  }

  if (isError) {
    console.error(error);
    return (
      <ErrorIndicator>
        <ErrorMessage id="error-message">
          <img src="/icons/error-icon.svg" />
          There was a problem while loading the project data
        </ErrorMessage>
        <ErrorReloadButton onClick={() => refetch()}>
          Try again <img src="/icons/red-arrow.svg" />
        </ErrorReloadButton>
      </ErrorIndicator>
    );
  }

  return (
    <List>
      {data?.map((project) => (
        <li key={project.id}>
          <ProjectCard project={project} />
        </li>
      ))}
    </List>
  );
}
