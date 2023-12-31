function mergeTwoLists(l1, l2) {
  let dummyHead = new ListNode(0);
  let curr = dummyHead

  while (l1 != null && l2 != null) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }

  if (l1 != null) {
    curr.next = l1;
  } if (l2 != null) {
    curr.next = l2;
  }

  return dummyHead.next;
}
