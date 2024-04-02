function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function reverseKGroup(head, k) {
    function reverseLinkedList(head, k) {
        let prev = null;
        let curr = head;
        while (k > 0 && curr) {
            const next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
            k--;
        }
        return [prev, curr];
    }

    let dummy = new ListNode(0);
    dummy.next = head;
    let prevGroupEnd = dummy;

    while (true) {
        let groupStart = prevGroupEnd.next;
        let groupEnd = groupStart;
        let count = 1;

        while (count < k && groupEnd) {
            groupEnd = groupEnd.next;
            count++;
        }

        if (!groupEnd) break;

        let nextGroupStart = groupEnd.next;

        let [newGroupStart, newGroupEnd] = reverseLinkedList(groupStart, k);

        prevGroupEnd.next = newGroupStart;
        groupStart.next = nextGroupStart;

        prevGroupEnd = groupStart;
    }

    return dummy.next;
}

// Helper function to convert array to linked list
function arrayToLinkedList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

// Helper function to convert linked list to array
function linkedListToArray(head) {
    let result = [];
    let current = head;
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

let head1 = arrayToLinkedList([1, 2, 3, 4, 5]);
console.log(linkedListToArray(reverseKGroup(head1, 2))); // Output: [2, 1, 4, 3, 5]

let head2 = arrayToLinkedList([1, 2, 3, 4, 5]);
console.log(linkedListToArray(reverseKGroup(head2, 3))); // Output: [3, 2, 1, 4, 5]
