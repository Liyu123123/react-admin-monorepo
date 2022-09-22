<!--
 * Copyright © 2022 WIZ Holdings PTE. LTD. All rights reserved 
-->
<template>
  <div>
    <a-table
      :dataSource="dataSource"
      :columns="columns"
      :pagination="pagination"
      :loading="loading"
      @change="handleTableChange"
    />
  </div>
</template>

<script setup lang="ts" >
import { computed } from "vue";
import { usePagination } from "vue-request";
import type { TableProps } from "ant-design-vue";
import { getList } from "@/service/crud/index";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Job",
    dataIndex: "job",
    key: "job",
  },

  {
    title: "Action",
    key: "action",
  },
];

const { data, current, totalPage, loading, pageSize, run } = usePagination(
  getList,
  {
    defaultParams: [
      {
        limit: 5,
      },
    ],
    pagination: {
      currentKey: "page",
      pageSizeKey: "limit",
      totalKey: "data.total",
    },
  }
);
const pagination = computed(() => ({
  total: totalPage.value,
  current: current.value,
  pageSize: pageSize.value,
}));
const handleTableChange: TableProps["onChange"] = (
  pag: { pageSize: number; current: number },
  filters: any,
  sorter: any
) => {
  run({
    results: pag.pageSize!,
    page: pag?.current,
    sortField: sorter.field,
    sortOrder: sorter.order,
    ...filters,
  });
};
const dataSource = computed(() => data.value?.data.data || []);
</script>

<style>
</style>