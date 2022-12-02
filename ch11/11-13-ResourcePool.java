/**
 * p472 예시 (동작하지 않는 코드)
 */

private class ResourcePool {
  public Resource get() {
    Resource result;
    if (available.isEmpty()) {
      result = Resource.create();
      allocated.add(result);
    } else {
      result = available.pop();
      allocated.add(result);
    }
    return result;
  } 
}

private Deque<Resource> available;
private List<Resource> allocated;