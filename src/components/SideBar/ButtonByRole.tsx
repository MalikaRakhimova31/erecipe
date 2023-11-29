import { useNavigate } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Restricted from "@/providers/restricted";
import { roles } from "@/config/permissions";
import CButton from "../button/button";
import OrganizationButton from "../OrganizationButton/OrganizationButton";

interface RoleButton {
  role: keyof typeof roles;
  children: React.ReactElement;
}

export default function ButtonByRole(): React.ReactElement {
  const navigate = useNavigate();

  const component: RoleButton[] = [
    {
      role: roles.doctor,
      children: (
        <CButton
          text="Новый рецепт"
          onClick={() => {
            navigate("/create-recipe");
          }}
          buttonType="button"
          variant="solid"
          icon={<img src="/assets/create.svg" alt="create icon" />}
        />
      ),
    },
    {
      role: roles.mainDoctor,
      children: (
        <OrganizationButton
          src="/assets/clinicLogo.svg"
          text="Семейная поликлиника #20"
        />
      ),
    },
    {
      role: roles.healthMinistry,
      children: (
        <OrganizationButton src="/assets/minzdrav.svg" text="Минздрав РУз" />
      ),
    },
    {
      role: roles.pharmacy,
      children: (
        <OrganizationButton
          src="/assets/doridarmon.svg"
          text="Dori-Darmon Аптека #2"
        />
      ),
    },
  ];

  return (
    <Box width="100%">
      {component.map((el) => (
        <Restricted key={el.role} to={[el.role]}>
          {el.children}
        </Restricted>
      ))}
    </Box>
  );
}
