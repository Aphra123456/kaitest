<template>
    <el-container>

      <el-aside width="200px">
          <el-menu :default-openeds="['1', '3']">
            <el-sub-menu index="1">
                <template #title>
                    <el-link type="info">General</el-link>
                </template>
            </el-sub-menu>

            <el-sub-menu index="2">
                <template #title>
                    <el-link type="info">Authority</el-link>
                </template>
            </el-sub-menu>

            <el-sub-menu index="3">
                <template #title>
                    <el-link type="info">Pending Fill</el-link>
                </template>
            </el-sub-menu>

            <el-sub-menu index="3">
                <template #title>
                    <el-link type="info">Leave Plan</el-link>
                </template>
            </el-sub-menu>

            <el-sub-menu index="3">
                <template #title>
                    <el-link type="info">Leave Result</el-link>
                </template>
            </el-sub-menu>

          </el-menu>
      </el-aside>

      <el-container>

        <el-header>Header</el-header>

        <el-main>Main</el-main>

        <el-footer>Footer</el-footer>
        
      </el-container>
    </el-container>
</template>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>