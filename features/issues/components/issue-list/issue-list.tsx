import { useRouter } from "next/router";
import styled from "styled-components";
import { color, space, textFont } from "@styles/theme";
import { ProjectLanguage } from "@api/projects.types";
import { useGetProjects } from "@features/projects";
import { useGetIssues } from "../../api/use-get-issues";
import { IssueRow } from "./issue-row";
import { Filters } from "../filters/filters";
import { useFilters } from "../filters/use-filters";
const Container = styled.div`
  width: 100%;
`;

const TableContainer = styled.div`
  background: white;
  border: 1px solid ${color("gray", 200)};
  box-sizing: border-box;
  box-shadow: 0px 4px 8px -2px rgba(16, 24, 40, 0.1),
    0px 2px 4px -2px rgba(16, 24, 40, 0.06);
  border-radius: ${space(2)};
  overflow: hidden;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const HeaderRow = styled.tr`
  width: 100%;
  border-bottom: 1px solid ${color("gray", 200)};
`;

const HeaderCell = styled.th`
  align-items: center;
  padding: ${space(3, 6)};
  text-align: left;
  color: ${color("gray", 500)};
  ${textFont("xs", "medium")};
`;

const HeaderCellDiv = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 0;
`;

const HeaderCellImage = styled.img`
  height: 22px;
  width: 22px;
`;

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${space(4, 6)};
  border-top: 1px solid ${color("gray", 200)};
`;

const PaginationButton = styled.button`
  height: 38px;
  padding: ${space(0, 4)};
  background: white;
  border: 1px solid ${color("gray", 300)};
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 6px;

  &:not(:first-of-type) {
    margin-left: ${space(3)};
  }
`;

const PageInfo = styled.div`
  color: ${color("gray", 700)};
  ${textFont("sm", "regular")}
`;

const PageNumber = styled.span`
  color: ${color("gray", 700)};
  ${textFont("sm", "medium")}
`;

export function IssueList() {
  const router = useRouter();
  const page = Number(router.query.page || 1);
  const { filters } = useFilters();
  const navigateToPage = (newPage: number) =>
    router.push({
      pathname: router.pathname,
      query: {
        page: newPage,
        ...filters,
      },
    });

  const IssuesPage = useGetIssues(page);
  const projects = useGetProjects();

  if (projects.isLoading || IssuesPage.isLoading) {
    return <div>Loading</div>;
  }

  if (projects.isError) {
    console.error(projects.error);
    return <div>Error loading projects: {projects.error.message}</div>;
  }

  if (IssuesPage.isError) {
    console.error(IssuesPage.error);
    return <div>Error loading issues: {IssuesPage.error.message}</div>;
  }

  const projectIdToLanguage = (projects.data || []).reduce(
    (prev, project) => ({
      ...prev,
      [project.id]: project.language,
    }),
    {} as Record<string, ProjectLanguage>
  );

  const { items, meta } = IssuesPage.data || {};

  return (
    <Container>
      <Filters />
      <TableContainer>
        <Table>
          <thead>
            <HeaderRow>
              <HeaderCell>
                <HeaderCellDiv>
                  <HeaderCellImage src="/icons/checkbox-example.svg" />
                  Issue
                </HeaderCellDiv>
              </HeaderCell>

              <HeaderCell>Level</HeaderCell>
              <HeaderCell>Events</HeaderCell>
              <HeaderCell>Users</HeaderCell>
            </HeaderRow>
          </thead>
          <tbody>
            {(items || []).map((issue) => (
              <IssueRow
                key={issue.id}
                issue={issue}
                projectLanguage={projectIdToLanguage[issue.projectId]}
              />
            ))}
          </tbody>
        </Table>
        <PaginationContainer>
          <div>
            <PaginationButton
              onClick={() => navigateToPage(page - 1)}
              disabled={page === 1}
            >
              Previous
            </PaginationButton>
            <PaginationButton
              onClick={() => navigateToPage(page + 1)}
              disabled={page === meta?.totalPages}
            >
              Next
            </PaginationButton>
          </div>
          <PageInfo>
            Page <PageNumber>{meta?.currentPage}</PageNumber> of{" "}
            <PageNumber>{meta?.totalPages}</PageNumber>
          </PageInfo>
        </PaginationContainer>
      </TableContainer>
    </Container>
  );
}
