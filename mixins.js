import Vue from "vue";

Vue.mixin({
  methods: {
    jump(path) {
      // console.log(this.$route);
      if (path === this.$route.path) return;
      return this.$router.push(path);
    },
    deleteFn(row, success, error) {
      console.log("公共的删除methods，当前行数据：", row);

      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          console.log("delete sure");

          if (success) success();
        })
        .catch(() => {
          console.log("delete cancel");

          if (error) success();
        });
    },
  },
});
