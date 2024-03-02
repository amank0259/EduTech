const { gql, default: request } = require("graphql-request");

const MASTER_URL = "https://api-ap-south-1.hygraph.com/v2/" + process.env.NEXT_PUBLIC_HYGRAPH_API_KEY + "/master";

const getAllCourseList = async () => {
  const query = gql`
    query MyQuery {
        courseLists(first: 20, orderBy: createdAt_DESC) {
          author
          name
          id
          free
          description
          demoUrl
          sourceCode
          banner {
            url
          }
          chapter {
            ... on Chapter {
              id
              name
              video {
                url
              }
            }
          }
          totalChapters
          tag
          sourceCode
          id
        }
      }
    `

  const result = await request(MASTER_URL, query);
  return result;
}

const getSideBanner = async () => {
  const query = gql`
  query GetSideBanner {
    sideBanners {
      id
      name
      banner {
        id
        url
      }
      url
    }
  }  
  `
  const result = await request(MASTER_URL, query);
  return result;
}

const getCourseById = async (courseId) => {
  const query = gql`
  query MyQuery {
    courseList(where: {id: "`+ courseId + `"}) {
      banner {
        url
      }
      author
      chapter {
        ... on Chapter {
          id
          name
          video {
            url
          }
        }
      }
      demoUrl
      description
      free
      id
      name
      slug
      sourceCode
      tag
      totalChapters
    }
  }  
  `
  const result = await request(MASTER_URL, query);
  return result;
}

const enrollToCourse = async (courseId, email) => {
  const query = gql`
  mutation MyMutaion {
    createUserEnrollCourse(
      data: { courseId: "`+ courseId + `", userEmail: "` + email + `", courseList: { connect: { id: "` + courseId + `" } } }
    ) {
      id
    }
    publishManyUserEnrollCoursesConnection {
      edges {
        node {
          id
        }
      }
    }
  }
  `
  const result = await request(MASTER_URL, query);
  return result;
}

const checkUserEnrolledToCourse = async (courseId, email) => {
  const query = gql`
  query MyQuery {
    userEnrollCourses(where: {courseId: "`+ courseId + `", userEmail: "` + email + `"}) {
      id
    }
  }  
  `
  const result = await request(MASTER_URL, query);
  return result;
}

const getUserEnrolledCourseDetails = async (id, email) => {
  const query = gql`
  query MyQuery {
    userEnrollCourses(where: {id: "`+ id + `", userEmail: "` + email + `"}) {
      courseId
      id
      userEmail
      courseList {
        author
        banner {
          url
        }
        chapter {
          ... on Chapter {
            id
            name
            shortDesc
            video {
              url
            }
          }
        }
        demoUrl
        description
        free
        id
        name
        sourceCode
        slug
        totalChapters
      }
    }
  }
  `
  const result = await request(MASTER_URL, query);
  return result;
}

export default {
  getAllCourseList, getSideBanner, getCourseById, enrollToCourse, checkUserEnrolledToCourse, getUserEnrolledCourseDetails
}