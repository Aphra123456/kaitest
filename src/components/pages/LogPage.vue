<template>
  <el-form
    ref="ruleForm"
    :model="ruleForm"
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
  >
    <el-form-item label="User name" prop="name">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>

    <el-form-item label="User password" prop="password">
      <el-input v-model="ruleForm.password" show-password></el-input>
    </el-form-item>

    <el-button type="primary" @click="submitForm('ruleForm')"
        >Log In</el-button
    > 

  </el-form>
  </template>

  <script>
export default {
  data() {
    return {
      ruleForm: {
        name: '',
        password: '',
      },
      rules: {
        name: [
          {
            required: true,
            message: 'Please input User name',
            trigger: 'blur',
          },
        ],
        region: [
          {
            required: true,
            message: 'Please input User password',
            trigger: 'blur',
          },
        ],
      },
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
  },
}
</script>
      
 