import courseData from './courseData';

type Lesson = {
  title: String,
  slug: String,
  number: Number;
  downloadUrl: String,
  videoId: Number,
  text: String,
  sourceUrl?: String
}

type Chapter = {
  title: String,
  slug: String,
  number: Number,
  lessons: Lesson[]
}

type Course = {
  title: String,
  chapters: Chapter[]
}
export const useCourse = (): Course => {
  const chapters: Chapter[] = courseData.chapters.map(
    (chapter) => {
      const lessons: Lesson[] = chapter.lessons.map(
        (lesson) => ({
          ...lesson,
          path: `/course/chapter/${chapter.slug}/lesson/${lesson.slug}`,
        })
      );
      return {
        ...chapter,
        lessons,
      };
    }
  );
  return {
    ...courseData,
    chapters,
  };
};