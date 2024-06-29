import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Pagination } from "react-bootstrap";
import { Context } from "../../index";
import Style from "./Catalog.module.scss";

const Pages = observer(() => {
  const { flower } = useContext(Context);
  const pages = [1, 2, 3];
  return (
    <Pagination className={Style.pages_slide}>
      {pages.map((page) => (
        <Pagination.Item>{page}</Pagination.Item>
      ))}
    </Pagination>
  );
});

export default Pages;
