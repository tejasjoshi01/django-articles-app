import React from 'react'
import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';



const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const ImageVectors = [
  "https://image.freepik.com/free-vector/distance-course-isometric_98292-7151.jpg" , 
  "https://image.freepik.com/free-vector/tiny-student-sitting-book-pile-reading-flat-illustration_74855-15547.jpg", 
  "https://image.freepik.com/free-vector/three-wooden-bookshelves-with-various-books-flat-set-web-design_74855-14536.jpg", 
  "https://image.freepik.com/free-vector/ebooks-collection-library-archive-e-reading-literature-male-cartoon-character-loading-books-ereader-man-putting-novels-covers-bookshelf_335657-3447.jpg",
  "https://image.freepik.com/free-vector/student-guy-studying-internet-watching-online-lecture-computer-talking-math-tutor-through-video-call-cartoon-illustration_74855-14524.jpg",
  "https://image.freepik.com/free-vector/three-wooden-bookshelves-with-various-books-flat-set-web-design_74855-14536.jpg",
  "https://image.freepik.com/free-vector/people-reading-books-library_74855-7788.jpg",
  "https://image.freepik.com/free-vector/person-reading-book-about-global-world_74855-6622.jpg",
  "https://image.freepik.com/free-vector/happy-tiny-students-reading-books-flat-illustration_74855-15454.jpg",
]



function Article(props) {
  return (
    <div>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 3,
        }}
        dataSource={props.data}

        renderItem={item => (
          
          <List.Item
            key={item.title}
            actions={[
              <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
              <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
              <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
            ]}
            extra={
              <img
                width={272}
                alt="logo"
                src={ImageVectors[Math.floor(Math.random() * ImageVectors.length)]}
              />
            }
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<a href={`/articles/${item.id}`}> {item.title} </a>}
              description={item.sub_title}
            />
            {item.content}
          </List.Item>
        )}
      />

    </div>
  )
}

export default Article;













