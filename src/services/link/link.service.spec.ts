import { beforeEach, describe, expect, expectTypeOf, it, vi } from "vitest";

import LinkService from "./link.service";
import LinkRepository from "../../repositories/link/link.repository";
import LinkEntityType, { LinkEntity } from "../../entitites/link.entity";

describe("Link Service - Unit Tests", () => {
  let linkRepository: LinkRepository;
  let linkService: LinkService;

  beforeEach(() => {
    linkRepository = {
      createLink: vi.fn(),
      getLinkById: vi.fn(),
      listLinksByUserId: vi.fn(),
    } as unknown as LinkRepository;

    linkService = new LinkService(linkRepository);
  });

  it("deve criar um link", async () => {
    const data = {
      url: "https://example.com",
      userId: "user1",
    };

    const fakeLink = new LinkEntity(data.url, data.userId);
    (linkRepository.createLink as any).mockResolvedValue(fakeLink);

    const result = await linkService.createLink(data);

    expectTypeOf(result).toEqualTypeOf<LinkEntity>();
    expect(result).toEqual(fakeLink);

    // Verifica se chamou com objeto contendo os campos corretos (ignora id e datas)
    expect(linkRepository.createLink).toHaveBeenCalledWith(
      expect.objectContaining({
        url: data.url,
        userId: data.userId,
      })
    );
  });

  it("deve buscar um link por ID", async () => {
    const fakeLink = new LinkEntity("https://example.com", "user1");
    (linkRepository.getLinkById as any).mockResolvedValue(fakeLink);

    const request = { id: fakeLink.id };
    const result = await linkService.getLinkById(request);

    expectTypeOf(result).toEqualTypeOf<LinkEntity | null>();
    expect(result).toEqual(fakeLink);
    expect(linkRepository.getLinkById).toHaveBeenCalledWith(request);
  });

  it("deve retornar null se o link não existir", async () => {
    (linkRepository.getLinkById as any).mockResolvedValue(null);

    const request = { id: "non-existent-id" };
    const result = await linkService.getLinkById(request);

    expect(result).toBeNull();
    expect(linkRepository.getLinkById).toHaveBeenCalledWith(request);
  });

  it("deve listar todos os links de um usuário", async () => {
    const fakeLinks = [
      new LinkEntity("https://example.com/1", "user1"),
      new LinkEntity("https://example.com/2", "user1"),
    ];
    (linkRepository.listLinksByUserId as any).mockResolvedValue(fakeLinks);

    const request = { userId: "user1" };
    const result = await linkService.listLinksByUserId(request);

    expectTypeOf(result).toEqualTypeOf<LinkEntity[]>();
    expect(result).toEqual(fakeLinks);
    expect(result.length).toBe(2);
    expect(linkRepository.listLinksByUserId).toHaveBeenCalledWith(request);
  });

  it("deve retornar lista vazia de links por usuário", async () => {
    (linkRepository.listLinksByUserId as any).mockResolvedValue([]);

    const request = { userId: "user1" };
    const result = await linkService.listLinksByUserId(request);

    expectTypeOf(result).toEqualTypeOf<LinkEntity[]>();
    expect(result).toEqual([]);
    expect(linkRepository.listLinksByUserId).toHaveBeenCalledWith(request);
  });
});
