/**
 * p220 예시 (동작하지 않는 코드)
 */

public static void main(String[] args) {
  try {
    run(args);
  } catch (Exception e) {
    System.err.println(e);
    System.exit(1);
  }
}

static void run(String[] args) throws IOException {
  if (args.length == 0) throw new RuntimeException("파일명을 입력하세요.");
  String filename = args[args.length - 1];
  File input = Paths.get(filename).toFile();
  ObjectMapper mapper = new ObjectMapper();
  Order[] orders = mapper.readValue(input, Order[].class);
  if(Stream.of(args).anyMatch(arg -> "-r".equals(arg)))
    System.out.println(Stream.of(orders)
                              .filter(o -> "ready".equals(o.status))
                              .count());
  else
    System.out.println(orders.length);
}