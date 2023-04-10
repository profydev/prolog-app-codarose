import styled, { keyframes } from "styled-components";
import { breakpoint, space } from "@styles/theme";
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

const ErrorIndicator = styled.div``;
export function ProjectList() {
  const { data, isLoading, isError, error } = useGetProjects();

  if (isLoading) {
    return (
      <LoadingIndicator>
        <LoadingIcon src="/icons/loading-1.svg" alt="loading" />
      </LoadingIndicator>
    );
  }

  if (isError) {
    console.error(error);
    return <div>Error: {error.message}</div>;
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
