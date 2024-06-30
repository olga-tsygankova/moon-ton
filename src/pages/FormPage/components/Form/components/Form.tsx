import { ChangeEvent, FormEvent, useState } from "react";
import { AboutProject } from "./AboutProject";
import "./Form.css";
import { Contact } from "./Contact";
import { ProjectLink } from "./ProjectLink";
import { Other } from "./Other";
import { SubmitButton } from '../../../../../ui/Buttons/Submit';

interface FormData {
  projectName: string;
  tokenSymbol: string;
  projectDescription?: string;
  name: string;
  telegramLink: string;
  email?: string;
  projectTwitterLink: string;
  projectTelegramLink: string;
  projectWebsite: string;
  chain: string | null;
  liquidity: string;
  upload?: string;
}

export const Form = () => {
  const [formData, setFormData] = useState<FormData>({
    projectName: "",
    tokenSymbol: "",
    projectDescription: "",
    name: "",
    telegramLink: "",
    email: "",
    projectTwitterLink: "",
    projectTelegramLink: "",
    projectWebsite: "",
    chain: null,
    liquidity: "",
    upload: "",
  });

  const [activeSection, setActiveSection] = useState<
    "AboutProject" | "Contact" | "ProjectLink" | "Other"
  >("AboutProject");

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked, // Используйте значение checked напрямую
    }));
  };

  const isAboutProjectValid =
    formData.projectName !== "" && formData.tokenSymbol !== "";
  const isContactValid = formData.name !== "" && formData.telegramLink !== "";
  const isProjectLinkValid =
    formData.projectTwitterLink !== "" &&
    formData.projectTelegramLink !== "" &&
    formData.projectWebsite !== "";
  const isOtherValid = formData.chain !== null && formData.liquidity !== "";
  return (
    <form onSubmit={handleSubmit} className="form">
      <section style={{ opacity: "100%" }}>
        <AboutProject
          projectName={formData.projectName}
          tokenSymbol={formData.tokenSymbol}
          projectDescription={formData.projectDescription}
          handleInputChange={handleInputChange}
        />
      </section>

      <section
        style={{
          opacity: isAboutProjectValid ? "100%" : "30%",
          pointerEvents: isAboutProjectValid ? "auto" : "none",
        }}
      >
        <Contact
          name={formData.name}
          telegramLink={formData.telegramLink}
          email={formData.email}
          handleInputChange={handleInputChange}
        />
      </section>

      <section
        style={{
          opacity: isContactValid ? "100%" : "30%",
          pointerEvents: isContactValid ? "auto" : "none",
        }}
      >
        <ProjectLink
          projectTwitterLink={formData.projectTwitterLink}
          projectTelegramLink={formData.projectTelegramLink}
          projectWebsite={formData.projectWebsite}
          handleInputChange={handleInputChange}
        />
      </section>

      <section
        style={{
          opacity: isProjectLinkValid ? "100%" : "30%",
          pointerEvents: isProjectLinkValid ? "auto" : "none",
        }}
      >
        <Other
          liquidity={formData.liquidity}
          checked={formData.chain}
          handleInputChange={handleInputChange}
          chain={formData.chain}
        />
        <section
          style={{
            opacity: isOtherValid ? "100%" : "30%",
            pointerEvents: isOtherValid ? "auto" : "none",
          }}
        >
          <div className="submit-wrapper">
          <SubmitButton>Submit</SubmitButton>
          </div>
        </section>
      </section>
    </form>
  );
};
