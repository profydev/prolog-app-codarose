import styled from "styled-components";
import { Button, ButtonVariant, Select, Input } from "@features/ui";
import { IssueStatus, IssueLevel } from "@api/issues.types";
import { useFilters } from "./use-filters";

const FilteringButtonsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  min-width: 600px;
  justify-content: space-between;
  margin-bottom: 35px;
  gap: 16px;
`;

const FilteringInputBoxesContainer = styled.div`
  display: flex;
  flex-flow: row wrap;

  gap: 16px;
  & > * {
  }
`;
export function Filters() {
  const { handleFilters, filters } = useFilters();

  const handleStatusFilterChange = (status?: string) => {
    if (status) {
      status = status?.toLowerCase();
      status == "unresolved" ? (status = "open") : "resolved";
    }

    handleFilters({ status: status as IssueStatus });
  };

  const handleLevelFilterChange = (level?: string) => {
    if (level) {
      level = level?.toLowerCase();
    }
    handleFilters({ level: level as IssueLevel });
  };
  const handleProjectNameFilterChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const projectName = event.target.value.toString();
    handleFilters({ project: projectName });
  };

  const statusFilterLabels = {
    [IssueStatus.open]: "Unresolved",
    [IssueStatus.resolved]: "Resolved",
  };

  const levelFilterLabels = {
    [IssueLevel.error]: "Error",
    [IssueLevel.info]: "Info",
    [IssueLevel.warning]: "Warning",
  };
  const levelFilterOptions = Object.values(levelFilterLabels);

  const statusFilterOptions = Object.values(statusFilterLabels);

  const getStatusFilterLabel = (status: IssueStatus | undefined): string => {
    return status ? statusFilterLabels[status] : "";
  };

  const getLevelFilterLabel = (level: IssueLevel | undefined): string => {
    return level ? levelFilterLabels[level] : "";
  };

  return (
    <FilteringButtonsContainer>
      <Button variant={ButtonVariant.primary}>
        <img src="/icons/check-white.svg" />
        Resolve selected issues
      </Button>

      <FilteringInputBoxesContainer>
        <Select
          onChange={(value) => handleStatusFilterChange(value)}
          options={["", ...statusFilterOptions]}
          value={getStatusFilterLabel(filters.status) || ""}
          placeholder="Status"
        ></Select>
        <Select
          onChange={(value) => handleLevelFilterChange(value)}
          options={["", ...levelFilterOptions]}
          value={getLevelFilterLabel(filters.level) || ""}
          placeholder="Level"
        ></Select>
        <Input
          placeholder="Project name"
          inputIcon="/icons/search.svg"
          value={filters.project || ""}
          onChange={handleProjectNameFilterChange}
        ></Input>
      </FilteringInputBoxesContainer>
    </FilteringButtonsContainer>
  );
}
