import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LayoutTemplate, Menu, X } from "lucide-react";
import { ProfileInfoCard } from "./Cards";
import { UserContext } from "../context/userContext";
import { landingPageStyles } from "../assets/dummystyle";

const Navbar = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={landingPageStyles.header}>
      <div className={landingPageStyles.headerContainer}>
        <Link to="/" className={landingPageStyles.logoContainer}>
          <div className={landingPageStyles.logoIcon}>
            <LayoutTemplate className={landingPageStyles.logoIconInner} />
          </div>
          <span className={landingPageStyles.logoText}>AK ResumeBuilder</span>
        </Link>

        {/* Mobile menu button */}
        <button
          className={landingPageStyles.mobileMenuButton}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X size={24} className={landingPageStyles.mobileMenuIcon} />
          ) : (
            <Menu size={24} className={landingPageStyles.mobileMenuIcon} />
          )}
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center">
          {user ? (
            <ProfileInfoCard />
          ) : (
            <button
              className={landingPageStyles.desktopAuthButton}
              onClick={() => navigate("/")}
            >
              <div className={landingPageStyles.desktopAuthButtonOverlay}></div>
              <span className={landingPageStyles.desktopAuthButtonText}>Get Started</span>
            </button>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className={landingPageStyles.mobileMenu}>
          <div className={landingPageStyles.mobileMenuContainer}>
            {user ? (
              <div className={landingPageStyles.mobileUserInfo}>
                <div className={landingPageStyles.mobileUserWelcome}>Welcome back</div>
                <button
                  className={landingPageStyles.mobileDashboardButton}
                  onClick={() => {
                    navigate("/dashboard");
                    setMobileMenuOpen(false);
                  }}
                >
                  Go to Dashboard
                </button>
              </div>
            ) : (
              <button
                className={landingPageStyles.mobileAuthButton}
                onClick={() => {
                  navigate("/");
                  setMobileMenuOpen(false);
                }}
              >
                Get Started
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
