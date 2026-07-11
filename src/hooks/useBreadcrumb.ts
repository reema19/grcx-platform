import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { violationsData } from "../components/violations/violationsData";

const ACTIVE_VIOLATION_KEY = "activeViolationId";

interface BreadcrumbResult {
  segments: string[];
  hasBack: boolean;
  goBack: () => void;
}

function getViolationLabel(id: string): string {
  const violation = violationsData.find((item) => item.id === id);
  return violation?.title ?? "Violation Details";
}

function getActiveViolationLabel(): string {
  const storedId = sessionStorage.getItem(ACTIVE_VIOLATION_KEY);
  const id = storedId ?? violationsData[0]?.id;

  return id ? getViolationLabel(id) : "Violation Details";
}

function formatPageTitle(pathname: string): string {
  const segment = pathname.replace(/^\//, "").split("/")[0] || "overview";
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function useBreadcrumb(): BreadcrumbResult {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const pathname = location.pathname;

  useEffect(() => {
    if (id && pathname.match(/^\/violations\/[^/]+$/)) {
      sessionStorage.setItem(ACTIVE_VIOLATION_KEY, id);
    }
  }, [id, pathname]);

  if (pathname.match(/^\/violations\/[^/]+$/)) {
    return {
      segments: ["Violations", getViolationLabel(id!)],
      hasBack: true,
      goBack: () => navigate("/violations"),
    };
  }

  if (pathname === "/analysis") {
    return {
      segments: ["Violations", getActiveViolationLabel(), "Analysis"],
      hasBack: true,
      goBack: () => navigate(-1),
    };
  }

  if (pathname === "/remediation") {
    return {
      segments: ["Violations", getActiveViolationLabel(), "Remediation"],
      hasBack: true,
      goBack: () => navigate("/analysis"),
    };
  }

  if (pathname === "/success") {
    return {
      segments: ["Violations", getActiveViolationLabel(), "Success"],
      hasBack: true,
      goBack: () => navigate("/remediation"),
    };
  }

  return {
    segments: [formatPageTitle(pathname)],
    hasBack: false,
    goBack: () => {},
  };
}
