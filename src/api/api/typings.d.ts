declare namespace API {
  type deleteStudentParams = {
    studentId: number;
  };

  type deleteTeacherParams = {
    /** 教师ID */
    teacherId: number;
  };

  type deleteUserParams = {
    userId: number;
  };

  type findByHireDateAfterParams = {
    /** 开始日期 */
    startDate: string;
  };

  type findByHireDateBeforeParams = {
    /** 结束日期 */
    endDate: string;
  };

  type findByHireDateParams = {
    /** 入职日期 */
    hireDate: string;
  };

  type findByHireDateRangeParams = {
    /** 开始日期 */
    startDate: string;
    /** 结束日期 */
    endDate: string;
  };

  type getAllStudentsParams = {
    pageNum?: number;
    pageSize?: number;
  };

  type getAllTeachersParams = {
    /** 页码 */
    pageNum?: number;
    /** 每页大小 */
    pageSize?: number;
  };

  type getAllUsersParams = {
    pageNum?: number;
    pageSize?: number;
  };

  type getStudentByIdParams = {
    studentId: number;
  };

  type getTeacherByIdParams = {
    /** 教师ID */
    teacherId: number;
  };

  type getTeachersByDepartmentParams = {
    /** 部门名称 */
    department: string;
  };

  type getUserByIdParams = {
    userId: number;
  };

  type LoginRequest = {
    /** 用户名 */
    username?: string;
    /** 密码 */
    password?: string;
  };

  type LoginResponse = {
    /** 用户ID */
    userId?: number;
    /** 用户名 */
    username?: string;
    /** 用户角色 */
    role?: string;
    /** 访问令牌 */
    token?: string;
  };

  type PageInfoStudent = {
    total?: number;
    list?: Student[];
    pageNum?: number;
    pageSize?: number;
    size?: number;
    startRow?: number;
    endRow?: number;
    pages?: number;
    prePage?: number;
    nextPage?: number;
    isFirstPage?: boolean;
    isLastPage?: boolean;
    hasPreviousPage?: boolean;
    hasNextPage?: boolean;
    navigatePages?: number;
    navigatepageNums?: number[];
    navigateFirstPage?: number;
    navigateLastPage?: number;
  };

  type PageInfoTeacher = {
    total?: number;
    list?: Teacher[];
    pageNum?: number;
    pageSize?: number;
    size?: number;
    startRow?: number;
    endRow?: number;
    pages?: number;
    prePage?: number;
    nextPage?: number;
    isFirstPage?: boolean;
    isLastPage?: boolean;
    hasPreviousPage?: boolean;
    hasNextPage?: boolean;
    navigatePages?: number;
    navigatepageNums?: number[];
    navigateFirstPage?: number;
    navigateLastPage?: number;
  };

  type PageInfoUser = {
    total?: number;
    list?: User[];
    pageNum?: number;
    pageSize?: number;
    size?: number;
    startRow?: number;
    endRow?: number;
    pages?: number;
    prePage?: number;
    nextPage?: number;
    isFirstPage?: boolean;
    isLastPage?: boolean;
    hasPreviousPage?: boolean;
    hasNextPage?: boolean;
    navigatePages?: number;
    navigatepageNums?: number[];
    navigateFirstPage?: number;
    navigateLastPage?: number;
  };

  type restoreTeacherParams = {
    /** 教师ID */
    teacherId: number;
  };

  type ResultListString = {
    /** 状态码 */
    code?: number;
    /** 消息 */
    message?: string;
    /** 数据 */
    data?: string[];
  };

  type ResultListTeacher = {
    /** 状态码 */
    code?: number;
    /** 消息 */
    message?: string;
    /** 数据 */
    data?: Teacher[];
  };

  type ResultLoginResponse = {
    /** 状态码 */
    code?: number;
    /** 消息 */
    message?: string;
    data?: LoginResponse;
  };

  type ResultPageInfoStudent = {
    /** 状态码 */
    code?: number;
    /** 消息 */
    message?: string;
    data?: PageInfoStudent;
  };

  type ResultPageInfoTeacher = {
    /** 状态码 */
    code?: number;
    /** 消息 */
    message?: string;
    data?: PageInfoTeacher;
  };

  type ResultPageInfoUser = {
    /** 状态码 */
    code?: number;
    /** 消息 */
    message?: string;
    data?: PageInfoUser;
  };

  type ResultString = {
    /** 状态码 */
    code?: number;
    /** 消息 */
    message?: string;
    /** 数据 */
    data?: string;
  };

  type ResultStudent = {
    /** 状态码 */
    code?: number;
    /** 消息 */
    message?: string;
    data?: Student;
  };

  type ResultTeacher = {
    /** 状态码 */
    code?: number;
    /** 消息 */
    message?: string;
    data?: Teacher;
  };

  type ResultUser = {
    /** 状态码 */
    code?: number;
    /** 消息 */
    message?: string;
    data?: User;
  };

  type ResultVoid = {
    /** 状态码 */
    code?: number;
    /** 消息 */
    message?: string;
    /** 数据 */
    data?: Record<string, any>;
  };

  type searchTeachersParams = {
    /** 搜索关键词 */
    keyword: string;
  };

  type Student = {
    studentId?: number;
    userId?: number;
    studentNumber?: string;
    classId?: number;
    enrollmentDate?: string;
    createTime?: string;
    updateTime?: string;
    isDelete?: number;
  };

  type Teacher = {
    /** 教师ID */
    teacherId?: number;
    /** 工号 */
    teacherNumber?: string;
    /** 姓名 */
    name?: string;
    /** 性别 */
    gender?: string;
    /** 部门 */
    department?: string;
    /** 职位 */
    position?: string;
    /** 入职日期 */
    hireDate?: string;
    /** 头像URL */
    avatarUrl?: string;
    /** 创建时间 */
    createTime?: string;
    /** 更新时间 */
    updateTime?: string;
    /** 是否删除 */
    isDelete?: number;
  };

  type updateStudentParams = {
    studentId: number;
  };

  type updateTeacherAvatarParams = {
    /** 教师ID */
    teacherId: number;
  };

  type updateTeacherParams = {
    /** 教师ID */
    teacherId: number;
  };

  type updateUserParams = {
    userId: number;
  };

  type uploadAvatarParams = {
    /** 教师ID */
    teacherId: number;
  };

  type User = {
    /** 用户ID */
    userId?: number;
    /** 用户名 */
    username?: string;
    /** 密码 */
    password?: string;
    /** 角色 */
    role?: string;
    /** 姓名 */
    fullName?: string;
    /** 邮箱 */
    email?: string;
    /** 电话 */
    phone?: string;
    /** 创建时间 */
    createTime?: string;
    /** 更新时间 */
    updateTime?: string;
    /** 是否删除 */
    isDelete?: number;
  };
}
