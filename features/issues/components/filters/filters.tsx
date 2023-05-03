import styled from "styled-components";
import { Button, ButtonVariant, Select, Input } from "@features/ui";
import { IssueStatus, IssueLevel } from "@api/issues.types";
import { useFilters } from "./use-filters";
import { breakpoint } from "@styles/theme";
import { NavigationContext } from "@features/layout";
import { useContext } from "react";
const FilteringButtonsContainer = styled.div`
  @media (max-width: ${breakpoint("mobile")}) {
    flex-direction: column;
    justify-content: center;
    margin-block: 1rem;
    min-width: 100%;
    gap: 16px;

    & > * {
      justify-content: center;
    }
  }

  display: flex;
  flex-flow: row wrap;
  min-width: 600px;
  justify-content: space-between;
  margin-bottom: 35px;
  gap: 16px;
`;

const FilteringInputBoxesContainer = styled.div`
  @media (max-width: ${breakpoint("mobile")}) {
    display: flex;
    flex-direction: column;
    min-width: 100%;
    gap: 16px;
    order: -1;
  }
  display: flex;
  gap: 16px;
  flex-flow: row wrap;
  min-width: 600px;
  gap: 16px;
  order: 0;
`;
export function Filters() {
  const { isMobileMenuOpen } = useContext(NavigationContext);
  const { isModalOpen } = useContext(NavigationContext);

  const disabledValue = isMobileMenuOpen || isModalOpen ? true : false;

  const { handleFilters, filters } = useFilters();

  const handleStatusFilterChange = (status?: string) => {
    if (status) {
      status = status?.toLowerCase();
      status == "all"
        ? (status = "")
        : status == "unresolved"
        ? (status = "open")
        : "resolved";
    }

    handleFilters({ status: status as IssueStatus });
  };

  const handleLevelFilterChange = (level?: string) => {
    if (level) {
      level = level?.toLowerCase();
      level == "all" ? (level = "") : level;
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
          disabled={disabledValue}
          onChange={(value) => handleStatusFilterChange(value)}
          options={["All", ...statusFilterOptions]}
          value={getStatusFilterLabel(filters.status) || ""}
          placeholder="Status"
        ></Select>
        <Select
          disabled={disabledValue}
          onChange={(value) => handleLevelFilterChange(value)}
          options={["All", ...levelFilterOptions]}
          value={getLevelFilterLabel(filters.level) || ""}
          placeholder="Level"
        ></Select>
        <Input
          disabled={disabledValue}
          placeholder="Project name"
          inputIcon="/icons/search.svg"
          value={filters.project || ""}
          onChange={handleProjectNameFilterChange}
        ></Input>
      </FilteringInputBoxesContainer>
    </FilteringButtonsContainer>
  );
}
