import React from "react";
import { List, Avatar, Space, Tag, Popover } from "antd";
import {
    MessageOutlined,
    LikeOutlined,
    StarOutlined,
    EyeOutlined,
    CommentOutlined,
    UserOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

const ListItemWrapper = styled(List.Item)`
    background: #fff;
    padding: 10px 30px;
    margin-bottom: 10px;
    .ant-list-item-action {
        margin-top: 5px;
        margin-left: 0;
    }
    .ant-list-item-meta-title {
        font-size: 18px;
    }
`;

const ListHeader = styled.div`
    margin-bottom: 10px;
    display: flex;
    justify-content: space-around;
    .tag-wrapper {
        flex: 1;
    }
    .user-date-wrapper {
        flex: 1;
        text-align: right;
        .user-nickname {
            margin-right: 10px;
        }
        .create-date {
            color: #888;
        }
    }
`;

const userInfoWindow = (
    <div>
        <p>Content</p>
        <p>Content</p>
    </div>
);

const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

const ListItem = ({ item, type }) => {
    if (type == "study") {
        return (
            <ListItemWrapper
                actions={[
                    <IconText
                        icon={EyeOutlined}
                        text={item.views}
                        key="list-vertical-eye-o"
                    />,
                    <IconText
                        icon={CommentOutlined}
                        text={item.comments.length}
                        key="list-vertical-comment-o"
                    />,
                ]}
            >
                <ListHeader>
                    <div className="tag-wrapper">
                        {item.techStack.map((v, i) => (
                            <Tag color="magenta" key={v}>
                                {v}
                            </Tag>
                        ))}
                        <Tag color="geekblue">{item.area}</Tag>
                        {item.isOnGoing ? (
                            <Tag color="volcano">모집중</Tag>
                        ) : (
                            <Tag color="green">모집완료</Tag>
                        )}
                    </div>
                    <div className="user-date-wrapper">
                        <Popover content={userInfoWindow}>
                            <Avatar
                                style={{ cursor: "pointer" }}
                                size={24}
                                icon={<UserOutlined />}
                            />{" "}
                        </Popover>
                        <span className="user-nickname">
                            {item.writer.nickname}
                        </span>
                        <span className="create-date">{`${item.createAt.getFullYear()}.${
                            item.createAt.getMonth() + 1
                        }.${item.createAt.getDay()}`}</span>
                    </div>
                </ListHeader>
                <List.Item.Meta
                    //avatar={<Avatar src={item.avatar} />}
                    title={item.title}
                />
                {""}
            </ListItemWrapper>
        );
    } else if (type == "project") {
        return (
            <ListItemWrapper
                actions={[
                    <IconText
                        icon={StarOutlined}
                        text="156"
                        key="list-vertical-star-o"
                    />,
                    <IconText
                        icon={LikeOutlined}
                        text="156"
                        key="list-vertical-like-o"
                    />,
                    <IconText
                        icon={MessageOutlined}
                        text="2"
                        key="list-vertical-message"
                    />,
                ]}
            ></ListItemWrapper>
        );
    } else {
        return (
            <ListItemWrapper
                actions={[
                    <IconText
                        icon={StarOutlined}
                        text="156"
                        key="list-vertical-star-o"
                    />,
                    <IconText
                        icon={LikeOutlined}
                        text="156"
                        key="list-vertical-like-o"
                    />,
                    <IconText
                        icon={MessageOutlined}
                        text="2"
                        key="list-vertical-message"
                    />,
                ]}
            ></ListItemWrapper>
        );
    }
};

export default ListItem;
