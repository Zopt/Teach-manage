<template>
  <div class="user-management">
    <el-input v-model="searchQuery" placeholder="搜索用户..." class="search-input" />
    <el-button type="primary" @click="showAddDialog">添加用户</el-button>
    <el-table :data="filteredUsers" style="width: 100%">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="username" label="用户名"></el-table-column>
      <el-table-column prop="fullName" label="全名"></el-table-column>
      <el-table-column prop="email" label="邮箱"></el-table-column>
      <el-table-column prop="phone" label="手机号"></el-table-column>
      <el-table-column prop="role" label="角色"></el-table-column>
      <el-table-column prop="createTime" label="创建时间"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="editUser(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="deleteUser(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="users.length"
      :page-size="10"
      @current-change="handlePageChange">
    </el-pagination>

    <!-- 添加用户的对话框 -->
    <el-dialog title="添加用户" :visible.sync="addDialogVisible">
      <el-form :model="newUser">
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input v-model="newUser.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="全名" :label-width="formLabelWidth">
          <el-input v-model="newUser.fullName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" :label-width="formLabelWidth">
          <el-input v-model="newUser.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号" :label-width="formLabelWidth">
          <el-input v-model="newUser.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色" :label-width="formLabelWidth">
          <el-input v-model="newUser.role" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addUser">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { ref, onMounted, watchEffect } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const searchQuery = ref('');
    const users = ref([]);
    const filteredUsers = ref([]);
    const addDialogVisible = ref(false);
    const newUser = ref({
      username: '',
      fullName: '',
      email: '',
      phone: '',
      role: ''
    });
    const formLabelWidth = '120px';

    const fetchUsers = async () => {
      try {
        const response = await axios.get('/api/users');
        users.value = response.data.data;
        filteredUsers.value = users.value;
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    const addUser = async () => {
      try {
        const response = await axios.post('/api/users', newUser.value);
        if (response.data.code === 200) {
          ElMessage.success('用户添加成功');
          fetchUsers();
          addDialogVisible.value = false;
        } else {
          ElMessage.error('用户添加失败');
        }
      } catch (error) {
        console.error('Error adding user:', error);
        ElMessage.error('用户添加失败');
      }
    };

    const editUser = (user) => {
      console.log('Edit user:', user);
      // Logic to edit a user
    };

    const deleteUser = (user) => {
      console.log('Delete user:', user);
      // Logic to delete a user
    };

    const handlePageChange = (page) => {
      console.log('Current page:', page);
      // Logic to handle page changes
    };

    const showAddDialog = () => {
      addDialogVisible.value = true;
    };

    onMounted(() => {
      fetchUsers();
    });

    watchEffect(() => {
      filteredUsers.value = users.value.filter(user => user.username.includes(searchQuery.value));
    });

    return {
      searchQuery,
      users,
      filteredUsers,
      addUser,
      editUser,
      deleteUser,
      handlePageChange,
      addDialogVisible,
      newUser,
      formLabelWidth,
      showAddDialog
    };
  }
};
</script>

<style scoped>
.user-management {
  padding: 20px;
}

.search-input {
  width: 300px;
  margin-bottom: 20px;
}
</style>