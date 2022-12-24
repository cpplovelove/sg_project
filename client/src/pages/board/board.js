import Navigator from "../nav/nav";
import SunnyImage from "../../assets/sunny.png";
import { useState, useEffect } from "react";
import { PurposeController } from "../../controller/purpose-controller";
import "./board.css";
import axios from "axios";
import instance from "../../service/axios-config";

function BoardPage() {
  const [fruit, setFruit] = useState();
  const [purposes, setPurpose] = useState();
  const [page, setPage] = useState(1);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(4);
  const pageNumbers = [];

  function changePage(page) {
    alert(page);
  }

  function postList(listNumber) {
    var liList = [];
    for (var i = 0; i < 3; i++) {
      liList.push(
        <li className="index_no">
          <a
            class="index_no"
            href=""
            onClick={() => changePage(i + 1)}
            data-value={i + 1}
          >
            {i + 1}
          </a>
        </li>
      );
    }
    return liList;
  }

  function setPosts(start, end, contents) {
    var liList = [];
    for (var i = start; i < end; i++) {
      liList.push(<div className="purpose"> {contents[i].content}</div>);
    }
    return liList;
  }

  useEffect(() => {
    setFruit("Apple");
    async function test() {
      const paginationData = await PurposeController.getPurposesByPage(page);

      setStart(paginationData.startItemNo);
      setEnd(paginationData.endItemNo);
      setPurpose(paginationData.dataList);
      for (
        let i = 1;
        i <=
        Math.ceil(paginationData.dataList.length / paginationData.countPerPage);
        i++
      ) {
        pageNumbers.push(i);
      }
      console.log("purposes", purposes);
      console.log(pageNumbers);
    }
    test();
    console.log("Fruit", fruit);
  }, [fruit]);

  return (
    <>
      <Navigator></Navigator>
      <div className="content">
        <h1>W I S H</h1>
        {purposes && setPosts(start, end, purposes)}
        {/* map으로 변경하기 */}
        <ul>{postList()}</ul>
        {/* <ul>
          {pageNumbers.map(([key, value]) => {
            <li className="index_no">
              <a
                class="index_no"
                href=""
                onClick={() => changePage(value)}
                style={{ textDecoration: "none" }}
              >
                {value}
              </a>
            </li>;
          })}
        </ul> */}
      </div>
      <div className="image">
        <img src={SunnyImage} alt="sunny" />
      </div>
    </>
  );
}

export default BoardPage;
