import { Icon } from "@/components/icon";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-wrap">
        <div className="footer-main">
          <Link className="brand brand--footer" href="/" aria-label="O.Murphis Global home">
            <span className="brand__mark" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="brand__text">
              <strong>O.MURPHIS</strong>
              <span>GLOBAL LTD.</span>
            </span>
          </Link>
          <p>
            Building progress.
            <br />
            Powering possibilities.
          </p>
          <Link
            className="footer-top-link"
            href="/#home"
            aria-label="Back to top"
            title="Back to top"
          >
            <Icon name="arrow-up" />
          </Link>
        </div>
        <div className="footer-bottom">
          <span>© O.MURPHIS GLOBAL LTD. All rights reserved.</span>
          <span>BUILDING · CONSTRUCTION · HEAVY MACHINERY</span>
          <Link href="/privacy-policy">Privacy policy</Link>
        </div>
      </div>
    </footer>
  );
}
