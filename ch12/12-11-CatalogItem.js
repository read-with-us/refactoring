/**
 * p531 예시
 */

class CatalogItem {
  #id;
  #title;
  #tags;
  constructor(id, title, tags) {
    this.#id = id;
    this.#title = title;
    this.#tags = tags;
  }

  get id() {
    return this.#id;
  }
  get title() {
    return this.#title;
  }
  hasTag(arg) {
    return this.#tags.includes(arg);
  }
}

class Scroll {
  #id;
  #catalogItem;
  #lastCleaned;
  constructor(id, dateLastCleaned, catalogId, catalog) {
    this.#id = id;
    this.#catalogItem = catalog.get(catalogId);
    this.#lastCleaned = dateLastCleaned;
  }
  get id() {
    return this.#id;
  }
  get title() {
    return this.#catalogItem.title;
  }
  hasTag(aString) {
    return this.#catalogItem.hasTag(aString);
  }

  needsCleaning(targetDate) {
    const threshold = this.hasTag("revered") ? 700 : 1500;
    return this.daysSinceLastCleaning(targetDate) > threshold;
  }

  daysSinceLastCleaning(targetDate) {
    return this.#lastCleaned.until(targetDate, Chronounit.DAYS);
  }
}

/**
 * 예시 실행을 위한 임의의 코드
 */

const Chronounit = {
  DAYS: "...",
};

const aDocument = [
  {
    id: 1,
    catalogData: {
      id: 1,
      title: "리팩터링",
      tags: ["소프트웨어 공학", "자바스크립트"],
    },
    lastCleaned: {
      until: (targetDate, ChronounitDAYS) => 2000,
    },
  },
  {
    id: 2,
    catalogData: {
      id: 2,
      title: "자바스크립트 완벽가이드",
      tags: ["프로그래밍 언어", "자바스크립트"],
    },
    lastCleaned: {
      until: (targetDate, ChronounitDAYS) => 500,
    },
  },
];

const LocalDate = {
  parse: (date) => date,
};

const catalog = {
  get: (id) => {
    const catalogItem = aDocument.find((d) => d.id === id);
    return new CatalogItem(
      catalogItem.id,
      catalogItem.catalogData.title,
      catalogItem.catalogData.tags
    );
  },
};

/**
 * 예시 호출
 */

const scrolls = aDocument.map(
  (record) =>
    new Scroll(
      record.id,
      LocalDate.parse(record.lastCleaned),
      record.catalogData.id,
      catalog
    )
);

scrolls.forEach((s) =>
  console.log(
    s.id,
    s.title,
    s.hasTag("자바스크립트"),
    s.needsCleaning("2022-12-09")
  )
);
