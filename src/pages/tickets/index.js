import { ref } from "vue";

export function useComposibleTicket() {
  const columns = ref([
    {
      name: "id",
      required: false,
      field: "id",
    },
    {
      name: "title",
      required: true,
      label: "Title",
      align: "left",
      field: "title",
      format: (val) => `${val}`,
      sortable: true,
    },
    {
      name: "category",
      align: "left",
      label: "Category",
      field: "category",
      sortable: true,
    },
    {
      name: "brand",
      align: "left",
      label: "Brand",
      field: "brand",
      sortable: true,
    },
    {
      name: "description",
      align: "left",
      label: "Description",
      field: "description",
      format: (val) => sliceFunc(val),
    },
    {
      name: "price",
      align: "left",
      label: "Price $",
      field: "price",
      sortable: true,
      sort: (a, b) => parseInt(a) - parseInt(b),
    },
    { name: "actions", label: "Action" },
  ]);
  const visibleColumns = ref([
    "title",
    "category",
    "brand",
    "description",
    "price",
    "actions",
  ]);
  function sliceFunc(text, count) {
    return text.length > count ? `${text.substr(0, count)}...` : text;
  }
  return {
    columns,
    sliceFunc,
    visibleColumns,
  };
}
