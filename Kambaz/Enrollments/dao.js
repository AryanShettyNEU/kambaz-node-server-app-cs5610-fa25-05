import { v4 as uuidv4 } from "uuid";
export default function EnrollmentsDao(db) {
  function enrollUserInCourse(userId, courseId) {
    const { enrollments } = db;

    db.enrollments = [
      ...enrollments,
      { _id: uuidv4(), user: userId, course: courseId },
    ];
  }
  function unEnrollUserInCourse(userId, courseId) {
    const { enrollments } = db;
    db.enrollments = enrollments.filter(
      (e) => !(e.course === courseId && e.user === userId)
    );
  }
  function fetchAllEnrollments(userId) {
    const { enrollments } = db;
    return enrollments.filter((e) => e.user === userId);
  }
  return { enrollUserInCourse, unEnrollUserInCourse, fetchAllEnrollments };
}
