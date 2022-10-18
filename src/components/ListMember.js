import React, { useState } from "react";
import { Panel, Tag, TagGroup, Col } from "rsuite";

import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleFill,
  RiCheckDoubleFill,
  RiDeleteBin6Line,
  RiListCheck2,
} from "react-icons/ri";
import { BiMessageSquareEdit } from "react-icons/bi";
import { useDispatch } from "react-redux";
import TaskModal from "./TaskModal";
import { borderColorMap, colorMap, tagColorMap } from "../assets/js/lists";

function ListMember(props) {
  const [open, setOpen] = useState(false);
  var dispatch = useDispatch();
  function handleCheck(arg) {
    var task_copy = {};
    var subtasks_copy = {};
    Object.assign(task_copy, props.task); // actual values are immutable
    Object.assign(subtasks_copy, task_copy.subtasks); // actual values are immutable
    Object.keys(subtasks_copy).map((subtask) => (subtasks_copy[subtask] = arg));
    task_copy.subtasks = subtasks_copy;

    task_copy["progress"] = arg; //bodge1
    dispatch(props.edit(task_copy));
  }
  return (
    <Col
      className="fade-in"
      xs={24}
      sm={12}
      md={12}
      lg={8}
      style={{ marginBottom: "1rem", borderRadius: "1rem" }}
    >
      <Panel
        shaded
        style={{ background: colorMap[props.task.color], height: "9rem" }}
      >
        <div
          className="icons"
          style={{ fontSize: "1.25rem", position: "absolute", right: "1rem" }}
          onClick={() => props.handleOpen(props.task)}
        >
          <BiMessageSquareEdit />
        </div>
        <TagGroup
          className="customScroll"
          style={{ width: "90%", overflow: "scroll", whiteSpace: "nowrap" }}
        >
          {props.selectedTag == null ? (
            ""
          ) : (
            <Tag
              size="md"
              color={props.task.color}
              style={{
                borderColor: tagColorMap[props.task.color],
                borderWidth: "1.5px",
                color: "white",
                borderStyle: "solid",
                borderRadius: "1rem",
                fontWeight: "600",
                background: tagColorMap[props.task.color],
              }}
              onClick={() => props.handleTagSelect(props.selectedTag)}
            >
              {" "}
              <div>
                {props.selectedTag[0].toUpperCase() +
                  props.selectedTag.slice(1)}
              </div>
            </Tag>
          )}
          {props.task.tags
            .filter((tag) => tag !== props.selectedTag)
            .map((tag, index) => (
              <Tag
                key={index}
                size="md"
                color={props.task.color}
                style={{
                  borderColor: borderColorMap[props.task.color],
                  borderWidth: "1.5px",
                  color: "black",
                  borderStyle: "solid",
                  borderRadius: "1rem",
                  fontWeight: "400",
                }}
                onClick={() => props.handleTagSelect(tag)}
              >
                {" "}
                <div>{tag[0].toUpperCase() + tag.slice(1)}</div>
              </Tag>
            ))}
        </TagGroup>
        <div
          className="customScroll"
          onClick={() => setOpen(true)}
          style={{
            position: "absolute",
            paddingTop: "0.75rem",
            fontWeight: "bold",
            color: "#3c3c3c",
            fontSize: "larger",
            whiteSpace: "nowrap",
            overflow: "scroll",
            width: "80%",
          }}
        >
          {props.task.name}
        </div>
        <div
          onClick={() => setOpen(true)}
          style={{
            position: "absolute",
            bottom: "0.75rem",
            width: "50vw",
            color: "#3c3c3c",
            fontSize: "small",
            lineHeight: "1.25rem",
            fontWeight: "400",
          }}
        >
          <RiListCheck2 /> {Object.keys(props.task.subtasks).length} subtasks.
          <br />
          <RiCheckDoubleFill /> {(props.task.progress * 100).toFixed()}%
          Completed
        </div>
        <br />
        <div
          className="icons"
          style={{
            fontSize: "1rem",
            position: "absolute",
            right: "1.15rem",
            bottom: "2.5rem",
            display: "",
          }}
          onClick={() => props.handleDelete(props.task)}
        >
          <RiDeleteBin6Line />
        </div>
        <div
          className="icons"
          style={{
            fontSize: "1.25rem",
            position: "absolute",
            right: "1rem",
            bottom: "0.5rem",
          }}
        >
          {props.task.progress === 1 ? (
            <RiCheckboxCircleFill onClick={() => handleCheck(0)} />
          ) : (
            <RiCheckboxBlankCircleLine onClick={() => handleCheck(1)} />
          )}
        </div>
      </Panel>
      <TaskModal
        edit={(payload) => props.edit(payload)}
        task={props.task}
        open={open}
        close={() => setOpen(false)}
      />
    </Col>
  );
}

export default ListMember;
