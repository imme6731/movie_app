import { Helmet } from "react-helmet";

export const PageTitle = ({ titleName }) => {
  return (
    <Helmet>
      <title>SIFILM | {titleName}</title>
    </Helmet>
  );
};
