import Link from "next/link";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function DocsPagination({ preLink, nextLink }) {
  return (
    <nav
      aria-label="pagination"
      className="pagination my-12 border-t border-gray-200 pt-8"
    >
      {preLink ? (
        <Link className="pagination-item" href={preLink.slug} prefetch={false}>
          <span
            className="text-wrapper pagination-label"
            style={
              {
                "--text-color": "var(--ds-gray-1000)",
                "--text-size": "0.8125rem",
                "--text-line-height": "1.125rem",
                "--text-letter-spacing": "initial",
                "--text-weight": 400,
              } as React.CSSProperties
            }
          >
            Previous
          </span>
          <div className="pagination-title">
            <span className="pagination-icon">
              <FiChevronLeft style={{ width: "20px", height: "20px" }} />
            </span>
            <span
              className="text-wrapper"
              style={
                {
                  "--text-color": "var(--ds-gray-1000)",
                  "--text-size": "1rem",
                  "--text-line-height": "1.5rem",
                  "--text-letter-spacing": "initial",
                  "--text-weight": 500,
                } as React.CSSProperties
              }
            >
              {preLink.nav_title || preLink.title}
            </span>
          </div>
        </Link>
      ) : null}
      {nextLink ? (
        <Link
          className="pagination-item pagination-item-right"
          href={nextLink.slug}
          prefetch={false}
        >
          <span
            className="text-wrapper pagination-label"
            style={
              {
                "--text-color": "var(--ds-gray-1000)",
                "--text-size": "0.8125rem",
                "--text-line-height": "1.125rem",
                "--text-letter-spacing": "initial",
                "--text-weight": 400,
              } as React.CSSProperties
            }
          >
            Next
          </span>
          <div className="pagination-title">
            <span
              className="text-wrapper"
              style={
                {
                  "--text-color": "var(--ds-gray-1000)",
                  "--text-size": "1rem",
                  "--text-line-height": "1.5rem",
                  "--text-letter-spacing": "initial",
                  "--text-weight": 500,
                } as React.CSSProperties
              }
            >
              {nextLink.nav_title || nextLink.title}
            </span>
            <span className="pagination-icon">
              <FiChevronRight style={{ width: "20px", height: "20px" }} />
            </span>
          </div>
        </Link>
      ) : null}
    </nav>
  );
}
